// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  API_ROOT_URL: "/API_peterswuan/index.php/",
  firebase: {
    apiKey: "AIzaSyCM4HN6Tv47JHK0kIInMpROLsxPYcQuwgk",
    authDomain: "peterswuan-bee6a.firebaseapp.com",
    databaseURL: "https://peterswuan-bee6a.firebaseio.com",
    projectId: "peterswuan-bee6a",
    storageBucket: "peterswuan-bee6a.appspot.com",
    messagingSenderId: "853388613402"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
