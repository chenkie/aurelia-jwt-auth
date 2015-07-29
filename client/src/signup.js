import {inject} from 'aurelia-framework';
import {AuthService} from 'paulvanbladel/aureliauth';

@inject(AuthService)

export class Signup{
  constructor(auth){
    this.auth = auth;
  }

  heading = 'Sign Up';

  username;
  password;
  extraInfo;
  signupError;

  signup(){

    var userInfo = { username: this.username, password: this.password, extraInfo: this.extraInfo }

    return this.auth.signup(userInfo)
    .then((response) => {
      console.log("signed up");
    })
    .catch(error => {
      this.signupError = error.response;
    });
    
  }
}