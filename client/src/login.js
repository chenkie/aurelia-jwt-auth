import {AuthService} from 'paulvanbladel/aureliauth';
import {inject} from 'aurelia-framework';

@inject(AuthService)

export class Login {
  
  heading = 'Login';

  // User inputs will be bound to these view models
  // and when submitting the form for login  
  email = '';
  password = '';

  // This view model will be given an error value
  // if anything goes wrong with the login
  loginError = '';
    
  constructor(auth) {
    this.auth = auth;
  };

  login() {
    return this.auth.login(this.email, this.password)
    .then(response => {
      console.log("Login response: " + response);
    })
    .catch(error => {
      this.loginError = error.response;
    });
  };
}