import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

// Using Aurelia's dependency injection, we inject HttpClient
// with the @inject decorator to make HTTP requests
@inject(HttpClient)

export class SecretQuote {

  heading = 'Super Secret Quote';

  // View model that will be populated with the 
  // the secret quote retrieved from the API and
  // displayed in the view
  secretQuote = '';

  constructor(http) {
    this.http = http;
  };

  activate() {
    return this.http.get('http://localhost:3001/api/protected/random-quote')
    .then(response => {
      this.secretQuote = response.content;
    }).catch(error => {
      console.log('Error getting quote');
    });
  };
}