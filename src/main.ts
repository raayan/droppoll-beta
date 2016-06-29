import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

// import the main component
import { AppComponent, environment } from './app/';

// angular 2 component router
import { APP_ROUTER_PROVIDERS } from './app/app.routes';

// http dependency for loading CDN stylesheets
import { HTTP_PROVIDERS } from '@angular/http';

// firebase dependency
import { FIREBASE_PROVIDERS, defaultFirebase, 
  AuthMethods, 
  AuthProviders, 
  firebaseAuthConfig} from 'angularfire2';

// here we are going to globally provide a service
import { ExampleService } from './app/example.service';
import { FirebaseDataService } from './app/firebase-data.service';

if (environment.production) {
  enableProdMode();
}

// this is the bootstrap!
// things added below are GLOBALLY provided to the application, simply append it the array below
// once that is done you do NOT need to add it as a PROVIDER in any controller, just import and pass to constructor
bootstrap(AppComponent, [
  APP_ROUTER_PROVIDERS, // angular 2 component router global directives
  ExampleService, // now our exampleService is globally provided! go to example.component to see it in use
  FirebaseDataService,
  HTTP_PROVIDERS,
  FIREBASE_PROVIDERS,
  // Initialize Firebase app  
  defaultFirebase({
    apiKey: "AIzaSyB8UKkBLQUxJCZOn4Y9K4GbkSir97ftfnY",
    authDomain: "droppoll-6e9ae.firebaseapp.com",
    databaseURL: "https://droppoll-6e9ae.firebaseio.com",
    storageBucket: "droppoll-6e9ae.appspot.com",
  }),
  firebaseAuthConfig({
    provider: AuthProviders.Anonymous,
    method: AuthMethods.Anonymous
  })

]);
