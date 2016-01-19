# Aurelia-Node Authentication Example

This sample application shows how to do JWT authentication in Aurelia using the [aurelia-auth](https://github.com/paulvanbladel/aurelia-auth) package. The app uses Auth0's simple [NodeJS random quote API](https://github.com/auth0/nodejs-jwt-authentication-sample) which allows us to authenticate and view Chuck Norris quotes if we have a valid JWT. Big thanks to Paul van Bladel for pointers from his [sample app repo](https://github.com/paulvanbladel/aurelia-auth-sample).

## Installation

All the Aurelia-related files are in the `client` directory and all NodeJS files in `server`. To install, clone this repo to your target folder and then do the following:

1. Do `git submodule update --init` to pull the NodeJS API into the `server` directory
2. `cd` into `server` and do `npm install`
3. Run the Node server by doing `node server.js`
4. `cd` into `client` and do `npm install` followed by `jspm install`
5. Do `gulp watch` to run the Gulp tasks
6. View the app in your browser at localhost:9000

## Important Snippets

We need to supply specific configuration for our use of the [aurelia-auth](https://github.com/paulvanbladel/aurelia-auth) package

```js
// client/src/auth-config.js

// Specific settings for our application's
// authentication context. These will override
// the default settings provided by aureliauth

var config = {

  // Our Node API is being served from localhost:3001
  baseUrl: 'http://localhost:3001',
  // The API specifies that new users register at the POST /users enpoint
  signupUrl: 'users',
  // Logins happen at the POST /sessions/create endpoint
  loginUrl: 'sessions/create',
  // The API serves its tokens with a key of id_token which differs from
  // aureliauth's standard
  tokenName: 'id_token',
  // Once logged in, we want to redirect the user to the welcome view
  loginRedirect: '#/welcome',

}

export default config;
```

We can protect whichever routes we like by setting `auth:true` in the route configuration
```js
// client/src/router-config.js

...

{ route: 'secret-quote', name: 'secret-quote', moduleId: './secret-quote', nav: true, title:'Super Secret Quote', auth: true },

...
```

With all the configuration in place, we can provide methods for signup, login and logout.
```js

// client/src/signup.js

...

signup() {

    // Object to hold the view model values passed into the signup method
    var userInfo = { email: this.email, password: this.password }

    return this.auth.signup(userInfo)
    .then((response) => {
      console.log("Signed Up!");
    })
    .catch(error => {
      this.signupError = error.response;
    });
    
  };

...
```

```js

// client/src/login.js

...

login() {
    return this.auth.login(this.email, this.password)
    .then(response => {
      console.log("Login response: " + response);
    })
    .catch(error => {
      this.loginError = error.response;
    });
  };

...
```

```js

//client/src/logout.js

...

activate() {
    // When we get to the logout route, the logout 
    // method on the auth service will be called  
    // and we will be redirected to the login view
    this.authService.logout("#/login")
    .then(response => {
      console.log("Logged Out");
    })
    .catch(err => {
      console.log("Error Logging Out");
    });

  };

...
```

Finally, we can fetch a `super-secret-quote` once we're authenticated.

```js

// client/src/secret-quote.js

...

activate() {
    return this.http.get('http://localhost:3001/api/protected/random-quote')
    .then(response => {
      this.secretQuote = response.content;
    }).catch(error => {
      console.log('Error getting quote');
    });
  };

...
```

## License

MIT

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
