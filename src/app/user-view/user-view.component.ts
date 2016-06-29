import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable} from 'angularfire2';
import { FirebaseDataService } from '../firebase-data.service';
import { Router, ActivatedRoute, ROUTER_DIRECTIVES } from '@angular/router';
import { MdCard, MdCardHeader, MdCardTitleGroup, MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MdInput } from '@angular2-material/input';
import { MdButton } from '@angular2-material/button';

@Component({
  moduleId: module.id,
  selector: 'app-user-view',
  templateUrl: 'user-view.component.html',
  styleUrls: ['user-view.component.css'],
  directives: [ MdButton,MdCard, MdCardHeader, MdInput, ROUTER_DIRECTIVES ]
})
export class UserViewComponent implements OnInit {
  polls: FirebaseListObservable<any[]>;
  user: string;
  userName: any;
  newpoll: any;
  options: any
  constructor(private fbds: FirebaseDataService, private route: ActivatedRoute, private router: Router) {
    this.newpoll = {title: ''}
    this.options = [];
  }

  ngOnInit() {
  this.route.params.subscribe(params => {
     let id = params['id']; // (+) converts string 'id' to a number
     this.user = id;
     this.fbds.selectedUser = id;
     this.updatePolls();
     this.userName = this.fbds.getName();
  });

  }
  updatePolls() {
    this.polls = this.fbds.getPolls(this.user);
  }
  createPoll() {
    var poll = {name: this.newpoll.title, options: this.options, total: 0};
    this.fbds.createPoll(poll, this.user);
    this.newpoll = {title: ''}
    this.options = []
    this.updatePolls();
  }
  addOption() {
    this.options.push({name:'', score:0})
  }
  goToPoll(param: any) {
    this.router.navigate(param);
  }
}
