---
title: "Testing of redux action thunk"
date: "2020-01-01"
tags: ["typescript", "redux"]
---

In this post, I will present some practical ways to test an application that uses thunks from the redux-thunk [https://github.com/reduxjs/redux-thunk] library.

While browsing the web looking for ways and good practices to test redux-thunk, many times I came across tests that check implementation details, not logic.

I don't see much sense in such an approach, which will almost certainly be expensive to maintain - testing will become sensitive to change. What should be of interest to us is the effect of dispatched action on the state and possible check of selectors, if we have any.

## Thunk implementations test

~~~typescript
// Arrange
const store = mockStore(initialState);

// Act
await store.dispatch(someThunkFunction(requestPayload));

// Assert
const expectedActions = [
 someImplementedFunction_1(true), // expectation of implementation details
 someImplementedFunction_2('some param'),
 someImplementedFunction_3(123)
];
const actions = store.getActions();

expect(actions).toEqual(expectedActions);
~~~

The above example checks the actions executed by `someThunkFunction`. The `mockStore` function used in the example comes from the redux-mock-store [https://github.com/reduxjs/redux-mock-store] library.

Imagine you are doing refactoring and changing the implementation of `someThunkFunction`. From now on, calling two instead of three functions will set the appropriate state of the application.

~~~diff
someImplementedFunction_1(true),
+ someImplementedFunction_2('some param', 123),
- someImplementedFunction_3(123)
~~~

If we change its implementation details, e.g. it will contain 2 actions instead of 3, but the effect on the state remains the same - the test will not pass. We will have to change the expected games to online games. The information from this test is, in my opinion, useless.

## Some theory

When writing tests, we will follow a few rules:
the unit in our unit test is a single functionality of a given slice,
we skip testing actions and action-creators because they should not contain anything worth testing (the example presented at the end of the post is based on the Redux Toolkit [https://redux-toolkit.js.org/], which manages them itself),
we will focus only on thunks, single actions and selectors should be trivial, and as in the previous point - not worth testing,
actions and selectors not covered by thunk tests are best to cover when testing the components that use them.

## State test after thunk dispatch

We dispatch the thunk and check the state of the application we are interested in with the appropriate selectors if we have any. Otherwise, we compare individual elements of the obtained state with expectations (never add additional selectors only for testing!). This allows us to freely modify `someThunkFunction`.

As long as the state is correct - we have a green test and we do not bother with it. If the result is different after the changes, we will get valuable information. We will see what the state after the dispatch looks like and decide whether to fix the implementation or adapt the test to the new state.

~~~typescript
// Arrange
const store = mockStore(initialState);

// Act
await store.dispatch(someThunkFunction(requestPayload));

// Assert
const expectedState = {
 app: {
   someBoolean: true,
   someString: 'some param',
   someNumber: 123
 }
}
const state = store.getState();

expect(state).toEqual(expectedState);
~~~

## Example of redux-thunk test

The example is based on the CRA from the Redux and TypeScript template [https://github.com/reduxjs/cra-template-redux-typescript].

To write tests as shown, you must enable state creation with an initial value of `preloadedState`.

~~~typescript
// getStore.ts

// configureStore with preloadedState
const rootReducer = combineReducers({
 epics: epicsReducer,
 tasks: taskReducer
});

export const getStore = (preloadedState?: any) => configureStore({
 reducer: rootReducer,
 preloadedState
});

export type RootState = ReturnType<typeof rootReducer>;
~~~

In our simple example, we have an array of Epic and Task objects. Tasks have an `epicId` field indicating the Epic they belong to.

~~~typescript
// epicsSlice.ts
interface Epic {
 id: number;
 name: string;
}

// tasksSlice.ts
interface Task {
 id: number;
 epicId: number; // points on epic id
 name: string;
}
~~~
