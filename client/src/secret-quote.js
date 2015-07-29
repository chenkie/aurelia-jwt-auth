import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@inject(HttpClient)

export class SecretQuote{
  heading = 'Super Secret Quote';
  secretQuote = '';

  constructor(http){
    this.http = http;
  }

  activate(){
    return this.http.get('http://localhost:3001/api/protected/random-quote')
    .then(response => {
      this.secretQuote = response.content;
    });
  }
}