import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';

@inject(HttpClient)

export class RandomQuote{
  heading = 'Random Quote';
  randomQuote = '';

  constructor(http, auth){
    http.configure(config => {
      config
        .useStandardConfiguration()
        .withBaseUrl('http://localhost:3001/api/');
    });

    this.http = http;
  }

  activate(){
    return this.http.fetch('random-quote')
      .then(response => response.text())
      .then(quote => this.randomQuote = quote);
  }
}