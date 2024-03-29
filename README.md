# Semi-Minimal Next.js TypeScript Starter/Template

I'm a big fan of Next.js and TypeScript, and often find myself doing the same exact things for every new experiment and project I build.

So, I created this semi-minimal [Next.js](https://nextjs.org/) TypeScript project starter bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

This includes what I consider to the absolute bare minimum needed for a new project, though it doesn't include a testing framework, since that would be difficult to include without making this a bulkier more opinionated starter repo.

## Features

* Next.js
* TypeScript
* ESLint
* SASS + type definitions for CSS modules
* Prettier
* Pretty-quick
* Visual Studio Code extension recommendations

## Installation

### Using Github's Template Feature

1. Create a new repository via the "Use Template" button on Github. ([More instructions here.](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template#creating-a-repository-from-a-template)).

### Using `create-next-app`
```bash
npx create-next-app your-project -e "https://github.com/jdbar/nextjs-typescript-template"

# or

yarn create next-app your-project -e "https://github.com/jdbar/nextjs-typescript-template"
```

### Manual Install

1. Clone this repo.

2. Copy the contents into your project folder.

3. Run `npm install` or `yarn install`.
