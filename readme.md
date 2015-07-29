# Auerlia-Node Authentication Example

This sample application shows how to do JWT authentication in Aurelia using the [aurelia-auth](https://github.com/paulvanbladel/aurelia-auth) package. The app uses Auth0's simple [NodeJS random quote API](https://github.com/auth0/nodejs-jwt-authentication-sample) which allows us to authenticate and view Chuck Norris quotes if we have a valid JWT.

## Installation

All the Aurelia-related files are in the `client` directory and all NodeJS files in `server`. To install, clone this repo to your target folder and then do the following:

1. `cd` into `server` and do `npm install`
2. Run the Node server by doing `node server.js`
3. `cd` into `client` and do `npm install` followed by `jspm install`
4. Do `gulp watch` to run the Gulp task
5. View the app in your browser

## What is Auth0?

Auth0 helps you to:

* Add authentication with [multiple authentication sources](https://docs.auth0.com/identityproviders), either social like **Google, Facebook, Microsoft Account, LinkedIn, GitHub, Twitter, Box, Salesforce, amont others**, or enterprise identity systems like **Windows Azure AD, Google Apps, Active Directory, ADFS or any SAML Identity Provider**.
* Add authentication through more traditional **[username/password databases](https://docs.auth0.com/mysql-connection-tutorial)**.
* Add support for **[linking different user accounts](https://docs.auth0.com/link-accounts)** with the same user.
* Support for generating signed [Json Web Tokens](https://docs.auth0.com/jwt) to call your APIs and **flow the user identity** securely.
* Analytics of how, when and where users are logging in.
* Pull data from other sources and add it to the user profile, through [JavaScript rules](https://docs.auth0.com/rules).

## Create a free account in Auth0

1. Go to [Auth0](https://auth0.com) and click Sign Up.
2. Use Google, GitHub or Microsoft Account to login.