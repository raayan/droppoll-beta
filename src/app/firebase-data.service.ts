import { Injectable } from '@angular/core';
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';

@Injectable()
export class FirebaseDataService {

  constructor(private af: AngularFire) {

  }
  createPoll(poll: any) {
    this.af.database.list('/polls').push(poll);
  }
}
