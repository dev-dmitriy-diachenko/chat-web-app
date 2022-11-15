# CRA template with Sass, ESLint, Stylelint and Prettier, ready for Jest, Flow and VS Code

Custom template for [Create React App](https://create-react-app.dev/) to scaffold a new web app project.

Ships with recommended style guides for ESLint and Stylelint that allows you to deploy better and more reliable web apps.\

Adds `lint` and `fix` scripts to the default Create React App ones - _see [Additional Scripts](#additional-scripts)_.\
Uses Git hooks to format and attempt to fix ESLint and Stylelint errors before committing to Git.

## Features

### Sass

[Sass](https://sass-lang.com/) is an extension of CSS, adding nested rules, variables, mixins, selector inheritance, and more. It is compiled into CSS during the build action.

### ESLint

[ESLint](https://eslint.org/) is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs.

### Stylelint

[Stylelint](https://stylelint.io/) is a mighty, modern linter that helps you avoid errors and enforce conventions in your styles.

### Prettier

[Prettier](https://prettier.io/) is an opinionated code formatter. It ensures that all outputted code conforms to a consistent style.

### Git hooks

[Husky](https://github.com/typicode/husky) and [Lint-Staged](https://github.com/okonet/lint-staged) are configured to run linters against staged git files and don't let 💩 slip into your code base!

## Additional Scripts

In the project root directory, you can run the default [Create React App scripts](#available-scripts), plus:

### `npm run lint:scripts`

Lints the project javascripts using ESLint.

### `npm run lint:styles`

Lints the project stylesheets using Stylelint.

### `npm run lint:prettier`

Lints the project code formatting using Prettier.

### `npm run lint`

Runs all the linters.

### `npm run fix:scripts`

Attempts to fix automatically the project javascripts using ESLint.

### `npm run fix:styles`

Attempts to fix automatically the project stylesheets using Stylelint.

### `npm run fix:prettier`

Attempts to fix automatically the project code formatting using Prettier.

### `npm run fix`

Runs all the fixers.

## Style guides

### ESlint

When you use this template ESLint will check your code against various style guides (in that order):

- [react-app](https://github.com/facebook/create-react-app/tree/main/packages/eslint-config-react-app) - ESLint configuration used by Create React App.
- [react-app/jest](https://github.com/jest-community/eslint-plugin-jest) - Optional Jest rules for ESLint - _**disabled by default**_.
- [plugin:compat/recommended](https://github.com/amilajack/eslint-plugin-compat) - Recommended configuration for linting the browser compatibility of your code.
- [plugin:import/recommended](https://github.com/import-js/eslint-plugin-import) - Recommended configuration for imports.
- [plugin:jsx-a11y/recommended](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y) - Accessibility rules for JSX elements.
- [plugin:react/recommended](https://github.com/yannickcr/eslint-plugin-react) - Recommended configuration for React.
- [plugin:react-hooks/recommended](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks) - Recommended configuration for React Hooks.
- [airbnb](https://github.com/airbnb/javascript) - Popular JavaScript style guide.

By default, it will check any JavaScript files (`{js,jsx,ts,tsx}`) in your src folder.

### Stylelint

When you use this template Stylelint will check your code against various style guides (in that order):

- [stylelint-config-prettier](https://github.com/prettier/stylelint-config-prettier) - Turns off all rules that are unnecessary or might conflict with Prettier.
- [stylelint-config-standard-scss](https://github.com/stylelint-scss/stylelint-config-standard-scss) - The standard SCSS configuration for Stylelint

By default, it will check any stylesheets files (`{css,scss,sass}`) in your src folder.

### Prettier

This template comes with a standalone Prettier configuration file (`.prettierrc.js`) specifying formatting rules.

The same settings are also supplied in the form of an EditorConfig file (`.editorconfig`) for compatibility with code editors that support it.

## Configuration

You can customize the configuration by editing the following files at the root directory of your project:

- ESLint: `.eslintrc.js`
- Stylelint: `.stylelintrc.js`
- Prettier: `.prettierrc.js`, `.editorconfig.js`

## Ignoring files

You can add specific ignore rules by editing the following files at the root directory of your project:

- ESLint: `.eslintignore`
- Stylelint: `.stylelintignore`
- Prettier: `.prettierignore`

### Recommendations

For a better development experience, it is recommended to install these extensions:

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - Integrates ESLint into VS Code.
- [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint) - Integrates Stylelint into VS Code.
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - Prettier Formatter for VS Code.
- [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) - EditorConfig support for VS Code.
- [ES7 snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets) - Simple extensions for React, Redux and Graphql in JS/TS with ES7 syntax.
- [Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments) - Improve your code commenting by annotating with alert, informational, TODOs, and more!
- [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) - Spelling checker for source code.

## Author

- [LinkedIn](https://www.linkedin.com/in/dev-dmitriy-diachenko/) - [GitHub](https://github.com/dev-dmitriy-diachenko)

---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
