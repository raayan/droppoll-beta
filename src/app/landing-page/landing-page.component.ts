import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable} from 'angularfire2';
import { FirebaseDataService } from '../firebase-data.service';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { MdButton, MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MdCard } from '@angular2-material/card';

@Component({
  moduleId: module.id,
  selector: 'app-landing-page',
  templateUrl: 'landing-page.component.html',
  styleUrls: ['landing-page.component.css'],
  directives: [ROUTER_DIRECTIVES, MdButton, MD_BUTTON_DIRECTIVES, MdCard]
})
export class LandingPageComponent implements OnInit {
  users: FirebaseListObservable<any[]>;

  constructor(private fbds: FirebaseDataService, private router: Router) {}

  ngOnInit() {
    this.users = this.fbds.users;
  }
  goToUser(param: any) {
    this.router.navigate(['/user',param]);
  }

}
