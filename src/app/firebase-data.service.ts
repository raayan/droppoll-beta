import { Injectable } from '@angular/core';
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';

@Injectable()
export class FirebaseDataService {
  selectedUser: string;
  selectedPoll: any;
  user: FirebaseObjectObservable<any>;
  users: FirebaseListObservable<any[]>;
  
  constructor(private af: AngularFire) {
    this.users = af.database.list('/users');
  }

  createUser() {
    var user = {name: 'test_user0'};
    this.users.push(user);
  }
  createPoll(poll: any, userID: any) {
    this.af.database.list('/users/' + userID + '/polls').push(poll);
  }
  getPolls(id: string) {
    return this.af.database.list('/users/' + id + '/polls');
  }
  submitVote(pollID: string, index: any, option: any) {
    this.af.database.object('/users/' + this.selectedUser + '/polls/' + pollID + '/options/' + index).update(option);
  }
  upTotal(pollID: string, option: any){
    console.log(option);
    this.af.database.object('/users/' + this.selectedUser + '/polls/' + pollID).update({total: option});
  }
  getName() {
    this.user = this.af.database.object('/users/' + this.selectedUser); 
    return this.user;
  }
}
