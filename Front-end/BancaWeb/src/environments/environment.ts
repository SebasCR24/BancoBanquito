// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // CoreBanquito_account: 'http://corebanquito-account.us-east-1.elasticbeanstalk.com',
  // CoreBanquito_bank : 'http://corebanquito-bank.us-east-1.elasticbeanstalk.com',
  // CoreBanquito_client : 'http://corebanquito-client.us-east-1.elasticbeanstalk.com',
  // CoreBanquito_interest : 'http://corebanquito-interest.us-east-2.elasticbeanstalk.com',
  // CoreBanquito_product : 'http://corebanquito-product.us-east-2.elasticbeanstalk.com',
  // CoreCobros_commission : 'http://corecobros-commission.us-east-2.elasticbeanstalk.com',
  // CoreCobros_invoice : 'http://corecobros-invoice.us-east-1.elasticbeanstalk.com',
  // CoreCobros_receivables : 'http://corecobros-receivables.us-east-1.elasticbeanstalk.com',
  CoreCobros_company : 'http://localhost:8081/api/v1',
  CoreCobros_cobro : 'http://localhost:8080/api/v1',


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
