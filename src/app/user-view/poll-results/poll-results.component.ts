import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FirebaseDataService } from '../../firebase-data.service';
import { MdProgressBar } from '@angular2-material/progress-bar';
import { MdProgressCircle } from '@angular2-material/progress-circle';

@Component({
  moduleId: module.id,
  selector: 'app-poll-results',
  templateUrl: 'poll-results.component.html',
  styleUrls: ['poll-results.component.css'],
  directives: [MdProgressBar, MdProgressCircle]
})
export class PollResultsComponent implements OnInit {
  polls: any;
  id: any;
  constructor(private route: ActivatedRoute, private fbds: FirebaseDataService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id']; // (+) converts string 'id' to a number
      this.polls = this.fbds.getPolls(this.fbds.selectedUser);
    });
  }
  isCurrent(id: string) {
    if (id === this.id) {
      return false;
    }
    return true;
  }
}
