import config from './auth-config';

export function configure(aurelia) {

  // Here we provide configuration for our application and can
  // bring in the configuration settings we put within auth-config.js
  // that will tell the aureliauth plugin the specific settings
  // for our application's authentication context
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('paulvanbladel/aureliauth', (baseConfig)=>{
         baseConfig.configure(config);
    });

  aurelia.start().then(a => a.setRoot());
}