import config from './authConfig';

export function configure(aurelia) {

  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('paulvanbladel/aureliauth', (baseConfig)=>{
         baseConfig.configure(config);
    });
  aurelia.start().then(a => a.setRoot());
}