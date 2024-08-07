// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  // CoreBanquito_account: 'http://corebanquito-account.us-east-1.elasticbeanstalk.com',
  // CoreBanquito_bank : 'http://corebanquito-bank.us-east-1.elasticbeanstalk.com',
  // CoreBanquito_client : 'http://corebanquito-client.us-east-1.elasticbeanstalk.com',
  // CoreBanquito_interest : 'http://corebanquito-interest.us-east-2.elasticbeanstalk.com',
  // CoreBanquito_product : 'http://corebanquito-product.us-east-2.elasticbeanstalk.com',
  // CoreCobros_commission : 'http://corecobros-commission.us-east-2.elasticbeanstalk.com',
  // CoreCobros_invoice : 'http://corecobros-invoice.us-east-1.elasticbeanstalk.com',
  // CoreCobros_receivables : 'http://corecobros-receivables.us-east-1.elasticbeanstalk.com',

  // Core_account: 'http://localhost:8082/account-microservice/api/v1',
  // CoreCobros_company : 'http://localhost:8080/company-microservice/api/v1',
  // CoreCobros_cobro : 'http://localhost:9090/order-microservice/api/v1',

  CoreCobros_cobro : 'https://08zhnuj863.execute-api.us-east-1.amazonaws.com/banquito/order-microservice/api/v1',
  CoreCobros_company : 'https://08zhnuj863.execute-api.us-east-1.amazonaws.com/banquito/company-microservice/api/v1',
  Core_account: 'https://08zhnuj863.execute-api.us-east-1.amazonaws.com/banquito/account-microservice/api/v1',



  // CoreCobros_receivables: 'http://localhost:8080',
  // CoreBanquito_bank: 'http://localhost:8082',
  // CoreBanquito_account: 'http://localhost:8083',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
