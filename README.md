# Brew Timer

Brew Timer (https://beer-timer.netlify.app/) is a tool for homebrewers to manage their brew steps during their 1-hour boil. It is built with React (hooks, not classes), and continuously deploys to Netlify.

## Current Features

-   Add in any amount of steps in any order.
-   Hear an alarm and see a bright orange alert screen as each step is complete.
-   Allows you to enter in steps in the manner customary to how homebrew recipes: e.g., "Add 1oz Citra 15 minutes before end of boil."

## Upcoming Features

-   Customize boil time. Currently, it is hard-coded at 1 hour.
-   Add a back button to edit and/or cancel the current brew schedule.
-   Add a 'light' mode (currently defaults to a dark mode).
-   Add a help/intro screen.

## Upcoming Refactor Work

-   Use TypeScript
-   Add unit tests
-   Use Redux to manage state
-   Use React Router to manage different views
-   Use CSS Modules

## Why This Was Built

**Why this app?** This was built because as a homebrewer, I became increasingly annoyed with having to set a dozen alarms and do a bunch of math to manage my additions during the boil. I'd rather have a computer do math for me.

**Why React?** While I've historically been a Vue developer, I chose React for this timer as a way to get better at the framework. As a result, pull requests and/or suggestions for improvements are more than welcome!

## Initial Designs

I'm no designer, but [here are the rough designs I made in XD](https://xd.adobe.com/view/f373759e-305e-47ea-9a47-fc29fc99d3cc-a620/grid).

## From Create-React-App

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

#### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

#### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

#### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

#### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

#### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

#### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
