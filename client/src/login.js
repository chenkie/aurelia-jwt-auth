import {AuthService} from 'paulvanbladel/aureliauth';
import {inject} from 'aurelia-framework';

@inject(AuthService)

export class Login{
  constructor(auth){
    this.auth = auth;
  };

  heading = 'Login';
  
  username;
  password;
  loginError;

  login(){
    return this.auth.login(this.username, this.password)
    .then(response => {
      console.log("success logged " + response);
    })
    .catch(error => {
      this.loginError = error.response;
    });
  };
  
  authenticate(name){
    return this.auth.authenticate(name, false, null)
    .then((response) => {
      console.log("auth response " + response);
    });

  }
}