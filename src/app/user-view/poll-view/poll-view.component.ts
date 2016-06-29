import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FirebaseObjectObservable } from 'angularfire2';
import { FirebaseDataService } from '../../firebase-data.service';
import { AngularFire } from 'angularfire2';

@Component({
  moduleId: module.id,
  selector: 'app-poll-view',
  templateUrl: 'poll-view.component.html',
  styleUrls: ['poll-view.component.css']
})
export class PollViewComponent implements OnInit {
  polls: any;
  id: any;
  constructor(private route: ActivatedRoute, private router: Router, private fbds: FirebaseDataService, private af: AngularFire) {
  }


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id']; // (+) converts string 'id' to a number
      this.polls = this.fbds.getPolls(this.fbds.selectedUser);
    });
  }

  submitVote(index: any, option: any, total: any) {
    if (document.cookie.indexOf(this.id) == -1){
      option.score += 1;
      this.fbds.submitVote(this.id, index, option);
      console.log(total);
      total += 1;
      this.fbds.upTotal(this.id, total);
      document.cookie += this.id + ";";
    }
    let res_route = ['/user/' + this.fbds.selectedUser + '/results/' + this.id];
    this.router.navigate(res_route);
  }
  isCurrent(id: string) {
    if (id === this.id) {
      return false;
    }
    return true;
  }
}
