import {AuthService} from 'paulvanbladel/aureliauth';
import {inject} from 'aurelia-framework';

// Using Aurelia's dependency injection, we inject the AuthService
// with the @inject decorator
@inject(AuthService)

export class Logout {

  constructor(authService) {
    this.authService = authService;
  };
  
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
}