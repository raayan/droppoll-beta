// this is your main component
// on the index.html it is referenced, and everything inside of this component is displayed through that
// this is the highest level component in your application

// these are the imports for the component
import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';
import { MdButton } from '@angular2-material/button';
import { MdCard, MdCardHeader, MdCardTitleGroup, MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MdToolbar } from '@angular2-material/toolbar';
import { FirebaseDataService }from './firebase-data.service';
import { AngularFire }from 'angularfire2';
// so in the above line we import ExampleComponent from the file example.component.ts
// the file is in the example folder in our current folder (denoted by './')
// don't worry about the .ts, the compiler knows to look for the file

/// the @Component decoration is used to declare that this is a decoration
@Component({
  moduleId: module.id,
  selector: 'app-root', // this is your component is referenced in html, <app-root>
  templateUrl: 'app.component.html', // reference to the raw html for the component
  styleUrls: ['app.component.css'], // reference to the styling of the html listed above
  directives: [
    ROUTER_DIRECTIVES, 
    MdIcon,
    MdButton, MdToolbar, // the whitespace here doesn't matter! we can go horizontal or vertical
    MdCard, MdCardTitleGroup, MdCardHeader, MD_CARD_DIRECTIVES], // directives are objects such as <md-button> and what not
  providers: [MdIconRegistry] // a provider is usually where PERSISTENT data providers are declared, if you declare it here instead of main.ts a NEW INSTANCE will be created
})
export class AppComponent {
  title = 'DropPoll';
  sub_title = "A stylable, real-time poll"

  constructor(private fbds: FirebaseDataService, private af: AngularFire) {}

  clickLogin() {
    
  }
}
