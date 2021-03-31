---
title: "Testing of redux-thunk action"
date: "2021-03-30"
tags: ["javascript", "redux", "redux-thunk", "jest", "testing"]
description: "A practical approach to test an application that uses async redux-thunk action. The test will check the effect of dispatched action on the state."
image: "testing-of-redux-thunk-action.jpg"
---

In this post, I will present some practical approaches to test an application that uses thunks from the [redux-thunk](https://github.com/reduxjs/redux-thunk) library.

While browsing the web looking for ways and good practices to test redux state, many times I came across tests that check implementation details, not logic.

I don't see much sense in such an approach, which will almost certainly be expensive to maintain - testing will become sensitive to change. What should be of interest to us is the effect of dispatched action on the state and possible check of selectors, if we have any.

## Thunk implementations test

```typescript
// Arrange
const store = mockStore(initialState);

// Act
await store.dispatch(someThunkFunction(requestPayload));

// Assert
const expectedActions = [
  someImplementedFunction_1(true), // expectation of implementation details
  someImplementedFunction_2("some param"),
  someImplementedFunction_3(123),
];
const actions = store.getActions();

expect(actions).toEqual(expectedActions);
```

The above example checks the actions executed by `someThunkFunction`. The `mockStore` function used in the example comes from the [redux-mock-store](https://github.com/reduxjs/redux-mock-store) library.

Imagine you are doing refactoring and changing the implementation of `someThunkFunction`. From now on, calling two instead of three functions will set the appropriate state of the application.

```diff
someImplementedFunction_1(true),
+ someImplementedFunction_2('some param', 123),
- someImplementedFunction_3(123)
```

If we change its implementation details, e.g. it will contain 2 actions instead of 3, but the effect on the state remains the same - the test will not pass. The information from this test is, in my opinion, useless.

## State test after thunk dispatch

In this post, I will focus on testing async thunk action. We skip testing actions and action-creators because they should not contain anything worth testing (the example presented at the end of the post is based on the [Redux Toolkit](https://redux-toolkit.js.org/), which manages them itself). Single actions and selectors should be trivial.

We dispatch the thunk and check the state of the application we are interested in with the appropriate selectors (if we have any). Otherwise, we compare individual elements of the obtained state with expectations (never add additional selectors only for testing!). This allows us to freely modify `someThunkFunction`.

As long as the state is correct - we have a green test and we do not bother with it. If the result is different after the changes, we will get valuable information. We will see what the state after the dispatch looks like and decide whether to fix the implementation or adapt the test to the new state.

```typescript
// Arrange
const store = mockStore(initialState);

// Act
await store.dispatch(someThunkFunction(requestPayload));

// Assert
const expectedState = {
  app: {
    someBoolean: true,
    someString: "some param",
    someNumber: 123,
  },
};
const state = store.getState();

expect(state).toEqual(expectedState);
```

## Example of redux-thunk test

To write tests as shown, you must enable state creation with an initial value of `preloadedState`.

```javascript
// getStore.ts

const rootReducer = combineReducers({
  epics: epicsReducer,
  tasks: tasksReducer,
});

export const getStore = (preloadedState) =>
  configureStore({
    reducer: rootReducer,
    middleware: [thunk],
    // configureStore with preloadedState
    preloadedState,
  });
```

In our simple example, we have an array of Epic and Task objects. Tasks have an `epicId` field indicating the Epic they belong to. We will try to write test that removes epic with `id === 0` and tasks with `epicId === 0`.

```javascript
// epicsSlice.ts

const preloadedState = {
  epics: {
    list: [
      { id: 0, name: "epic 0" }, // epic to remove
      { id: 1, name: "epic 1" },
    ],
  },
  tasks: {
    list: [
      { id: 0, epicId: 0, name: "epic 0 first task" }, // task to remove (epicId: 0)
      { id: 1, epicId: 0, name: "epic 0 second task" }, // task to remove (epicId: 0)
      { id: 2, epicId: 1, name: "epic 1 first task" },
      { id: 3, epicId: 1, name: "epic 1 second task" },
    ],
  },
};
```

Let's create the method `removeEpicAndItsTasksThunk` that removes an Epic and all Tasks pointing to that Epic based on the given `id`. To complicate the example a bit, we will add a `Promise` that returns ids of Tasks to delete.

```javascript
export const removeEpicAndItsTasksThunk = createAsyncThunk(
  "removeEpicAndItsTasks",
  async (epicId, { getState, dispatch }) => {
    const state = getState();

    const tasksId = await new Promise((resolve) => {
      console.log("Waiting for some async action.");

      setTimeout(() => {
        const ids = state.tasks.list
          .filter((task) => task.epicId === epicId)
          .map((task) => task.id);

        console.log("Async action resolved after (at least) 2000ms.");
        resolve(ids);
      }, 2000);
    });

    dispatch(removeTasksById(tasksId));
    dispatch(removeEpicById(epicId));
  }
);
```

### Arrange

Thanks to `preloadedState` we can initialize the state the way we need. As I mentioned - we want to be sure, that the Epic and all Tasks in this Epic will be removed.

```javascript
// Arrange
const preloadedState = {
  epics: {
    list: [
      { id: 0, name: "epic 0" }, // epic to remove
      { id: 1, name: "epic 1" },
    ],
  },
  tasks: {
    list: [
      { id: 0, epicId: 0, name: "epic 0 first task" }, // task to remove (epicId: 0)
      { id: 1, epicId: 0, name: "epic 0 second task" }, // task to remove (epicId: 0)
      { id: 2, epicId: 1, name: "epic 1 first task" },
      { id: 3, epicId: 1, name: "epic 1 second task" },
    ],
  },
};

const expectedEpicList = [{ id: 1, name: "epic 1" }];

const expectedTaskList = [
  { id: 2, epicId: 1, name: "epic 1 first task" },
  { id: 3, epicId: 1, name: "epic 1 second task" },
];

const store = getStore(preloadedState);
```

### Act

The only thing Act does is call `removeEpicAndItsTasksThunk` with some id (0 in our case). Additionally, we cover `removeTasksById` and `removeEpicById` methods.

```javascript
// Act
await store.dispatch(removeEpicAndItsTasksThunk(0));
```

### Assert

In this section, we check if the state after calling `removeEpicAndItsTasksThunk` method is correct. Besides, we test two selectors: `getEpicsList` and `getTasksList`.

```javascript
// Assert
const state = store.getState();
const epicList = getEpicsList(state);
const taskList = getTasksList(state);

expect(epicList).toEqual(expectedEpicList);
expect(taskList).toEqual(expectedTaskList);
```

## Summary

The presented approach of thunk testing provides high code coverage. We do not check implementation details, only the result. We increase the resistance of tests to change in the code that do not affect the resulting state of the application

Check out a [repository with described example](https://github.com/wozniaklukasz/blog-testing-of-redux-thunk-action).
