---
title: "Deploy NextJS app to GitHub Pages using GitHub Actions"
date: "2021-04-02"
tags: ["javascript", "react", "nextjs", "github", "devops"]
description: "How to host NextJS static site on GitHub Pages and automatically deploy it on every commit with GitHub Actions"
image: "deploy-nextjs-app-to-github-pages-using-github-actions.jpg"
---

GitHub pages allow us to host static sites from a repository. NextJS can be used as a static site generator. If we combine these two things together and add some GitHub Action we get a React-based website that is easy to maintain, test, deploy, and host.

## Prepare NextJS application

To generate static output that can be served we need to add `next export` in the `package.json` command that creates a static version of the application.

```diff
  "scripts": {
    "dev": "next dev",
    "build": "next build",
+   "export": "next export",
    "start": "next start"
  },
```

According to the [NextJS documentation](https://nextjs.org/docs/advanced-features/static-html-export), there is a few caveats we must meet (e.g. we can not use `getServerSideProps` because of static rendering without a server) for successfully export. In my case, I use the default `next/image` loader, so I had to add an [default loader](https://nextjs.org/docs/basic-features/image-optimization#loader).

If our NextJS application is ready, we should try `npm run build && npm run export` command. Output `Export successful.` means that the application is ready to host on GitHub Pages.

> If you want to use a custom domain just add a CNAME containing that domain file to the `public` directory.

## GitHub Page

To host a website on GitHub Pages we have to activate it in repository settings. We can select a custom domain (in this case you have to add a `CNAME` file that contains an address and change DNS). You can also check the `Enforce HTTPS` option.

> Every `.dev` domain is on the HSTS preload list, which makes HTTPS required on all connections. So if you want to use `.dev` domain you have to check `Enforce HTTPS`.

![NextJS GitHub Actions GitHub Pages](/images/posts/deploy-nextjs-app-to-github-pages-using-github-actions/nextjs-github-actions-gh-pages.png)

## GitHub Action

GitHub provides `2,000 Actions minutes/month` for free accounts . It is more than enough to check how it works and use it in some side projects.

Let's move to create GitHub Action. Enter your project on GitHub then navigate to the `Actions` tab and choose `Node.js By GitHub Actions` (name of the action is up to you).

![NextJS GitHub Actions choose template](/images/posts/deploy-nextjs-app-to-github-pages-using-github-actions/nextjs-github-actions-choose-template.png)

I use the following script:

```yaml
name: GitHub Pages deploy

on:
  push:
    branches: [main] # every commit to main triggers action

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout 🛎️
        uses: actions/checkout@v2.3.1
      - name: Use Node.js 14.x
        uses: actions/setup-node@v1
        with:
          node-version: "14.x"

      - name: Installing my packages
        run: npm ci

      - name: Build my App
        run: npm run build
      - run: npm run export
      - run: touch ./out/.nojekyll # disable automatically processed files with Jekyll by GitHub Pages

      - name: Deploy 🚀
        uses: JamesIves/github-pages-deploy-action@4.1.0
        with:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          BRANCH: gh-pages # The branch the action should deploy to.
          FOLDER: out # The folder the action should deploy.
```

I think that this `yml` file is easy to understand. Some rough explanations:

- this action is triggered by a push to `main` branch,
- script will be running on Ubuntu (we can also choose Windows or macOS),
- first step is to checkout code and set Node.js version,
- now we need to install dependencies and build the project:
  - `npm ci` is used to install packages instead of `npm install` because it is faster what we care about due to GitHub Actions limitations,
  - `run: touch ./out/.nojekyll` is because the `_next` folder is by default not served by GitHub because of Jekyll processing, `.nojekyll` file prevents that,
- [github-pages-deploy-action](https://github.com/JamesIves/github-pages-deploy-action) is used to push static exported site to `gh-pages` branch,

> `npm ci` used in action requires `package-lock.json` that isn't created by `yarn`. There are some ways to handle it (e.g. `yarn install --frozen-lockfile`), but I decided to just use `npm` instead of `yarn` here.

## Summary

Now we can serve a static website on free hosting with automated deployment on push to `main`. Https is provided by GitHub Pages. A website cannot be hacked because is fully static. The only cost is a custom domain (if we want to).
