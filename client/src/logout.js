import {AuthService} from 'paulvanbladel/aureliauth';
import {inject} from 'aurelia-framework';

@inject(AuthService)

export class Logout {

  constructor(authService) {
    this.authService = authService;
  };
  
  activate(){

    this.authService.logout("#/login")
    .then(response => {
      console.log("Logged Out");
    })
    .catch(err => {
      console.log("Error Logging Out");
    });

  }
}