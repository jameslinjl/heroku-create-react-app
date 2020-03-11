This repo shows an example of create-react-app that can be hosted on Heroku + does proxying to an API hosted on another server.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Development Server via `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

NOTE: you have to add `http-middleware-proxy` and add the `src/setupProxy.js` file.

### Deployment to Heroku

The most important file here is the `static.json` file, which is used by Heroku to configure the proxy.

After adding that file, you should be able to simply follow the instructions in this [blog post](https://blog.heroku.com/deploying-react-with-zero-configuration) to deploy to Heroku.

* More general information about create-react-app deployments: https://facebook.github.io/create-react-app/docs/deployment
* More general information about create-react-app buildpack in Heroku: https://elements.heroku.com/buildpacks/mars/create-react-app-buildpack
