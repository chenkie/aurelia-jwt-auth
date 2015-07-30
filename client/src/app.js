import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';

import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import AppRouterConfig from 'router-config';
import HttpClientConfig from 'paulvanbladel/aureliauth/app.httpClient.config';

@inject(Router, HttpClientConfig, AppRouterConfig)

export class App {

  constructor(router, httpClientConfig, appRouterConfig) {
    
    this.router = router;

    // Client configuration provided by the aureliauth plugin
    this.httpClientConfig = httpClientConfig;

    // The application's configuration, including the
    // route definitions that we've declared in router-config.js
    this.appRouterConfig = appRouterConfig;
  };
  
  activate(){
    
    // Here we run the configuration when the app loads
    this.httpClientConfig.configure();
    this.appRouterConfig.configure();

  };
}