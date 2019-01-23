// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCsD2xCqqjctodkDZEJpYHFCzyO5i52zHQ',
    authDomain: 'dev-fb-test.firebaseapp.com',
    databaseURL: 'https://dev-fb-test.firebaseio.com',
    projectId: 'dev-fb-test',
    storageBucket: 'dev-fb-test.appspot.com',
    messagingSenderId: '668249222947'
  }
};
