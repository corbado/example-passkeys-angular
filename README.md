# Complete passkeys integration example for Angular (TypeScript) with Corbado

This is a sample implementation of the Corbado web component being integrated into a web application built with Angular (TypeScript).

## File structure

- `src/styles.css`: holds the styling information for the web component
- `src/app/app.module.ts`: adds support for web components
- `src/app/app-routing.module.ts`: routing for the Angular web app
- `src/app/login`: component for the login screen
- `src/app/login/delcarations.d.ts`: contains type declarations you need to add as well to make the web component work in TypeScript
- `src/app/profile`: component for the user profile information that is shown after successful authentication

## Setup

### Prerequisites

Please follow the steps in [Getting started](https://docs.corbado.com/overview/getting-started) to create and configure
a project in the [Corbado developer panel](https://app.corbado.com/signin#register).

You need to have [Node](https://nodejs.org/en/download), [Angular CLI](https://angular.io/guide/setup-local#install-the-angular-cli) and `npm` installed to run it.

## Usage
Install Angular CLI:


```bash
npm i -g @angular/cli
```

Run

```bash
npm i
```

to install all dependencies.

Finally, you can run the project locally with

```bash
ng serve
```
