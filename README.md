# React App Boilerplate

This React app boilerplate includes a set of commonly used libraries and patterns to help you get started with your next React project quickly.

## Features

- **React 18.2**
- **TypeScript**
- **React Router v6** for navigation.
- **Tanstack/query ** for data fetching and caching.
- **Context API** as a global state management solution instead of Redux (use-context-selector is used to prevent redrawing issue).
- **@mui/material 5.11.10** as a UI component library.
- **Emotion** for styling components with CSS-in-JS.
- **axios** for handling API calls.

## Getting Started

To get started with this boilerplate, simply clone this repository and install the dependencies:

git clone https://github.com/noumanaltaf/react-app-boilerplate.git
cd your-project
npm install


Once the installation is complete, you can start the development server:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Available Scripts

In the project directory, you can run:

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Usage

This boilerplate includes a simple example of how to use React Query and the Context API together to manage global state.

The `src` directory contains the following files and directories:

- `components`: This directory contains reusable UI components.
- `hooks`: This directory contains custom hooks for interacting with React Query API's.
- `pages`: This directory contains the main pages of the app and other pages.
- `theme`: This directory contains files related to styling (e.g breakpoints.ts for media queries generic implementation for styled components).
- `utils`: This directory contains helper functions files.
- `routes.ts`: This file contains constants for page routes.
- `App.ts`: This is the main component that renders the app.
- `index.ts`: This is the entry point of the app.

To add a new page to the app, create a new file in the `pages` directory and import it into `App.ts` or Dashboard.ts according to your usecase. To add a new component, create a new file in the `components` directory and import it into the appropriate page.

For each module (e.g Todo List App) a seprate context API is implemented to handle global states of each module seprately.

For handling complex local component states use useReducer hook. Create your reducer function using createReducer function to keep consistency in reducer files code. You can see TodoList.reducer file implementation as a reference.

Use useTodoDispatch for dispatching your state to context and useTodoContextSelector for selecting specific state from context. for [more details](https://github.com/dai-shi/use-context-selector) about these functions. 

## Customization

This boilerplate is meant to be a starting point for your project and can be customized to fit your needs. Here are some suggestions for customizing the boilerplate:

- Replace Material-UI with your preferred UI library or write your own styles with Emotion.
- Add new pages, components, and hooks to the app.
- Modify the example server-side API calls in the hooks to match your own API.

## Conclusion

This React app boilerplate provides a solid foundation for building a modern web application with React and typescript. It includes popular libraries and patterns that will help you build scalable, maintainable, and performant apps with ease.
