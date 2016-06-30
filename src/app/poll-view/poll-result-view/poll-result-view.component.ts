import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FirebaseDataService } from '../../firebase-data.service';
import { FirebaseObjectObservable } from 'angularfire2';
import { MdCard, MdCardTitleGroup, MdCardHeader, MD_CARD_DIRECTIVES} from '@angular2-material/card';
import { MdButton, MD_BUTTON_DIRECTIVES} from '@angular2-material/button';
import { MdInput,MdPlaceholder,MD_INPUT_DIRECTIVES} from '@angular2-material/input';
import { MdIcon, MD_ICON_DIRECTIVES} from '@angular2-material/icon';
import { MdProgressBar, MD_PROGRESS_BAR_DIRECTIVES } from '@angular2-material/progress-bar';

@Component({
  moduleId: module.id,
  selector: 'app-poll-result-view',
  templateUrl: 'poll-result-view.component.html',
  styleUrls: ['poll-result-view.component.css'],
  directives: [
    MdCard, MdCardHeader, MdCardTitleGroup, MD_CARD_DIRECTIVES,
    MdButton, MD_BUTTON_DIRECTIVES,
    MdInput,MdPlaceholder,MD_INPUT_DIRECTIVES,
    MdProgressBar, MD_PROGRESS_BAR_DIRECTIVES
    ]
})
export class PollResultViewComponent implements OnInit {
  poll: FirebaseObjectObservable<any>;
  pollID: string;
  total: number;
  constructor(private fbds: FirebaseDataService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.total = 0;
    this.pollID = this.fbds.getPollResult();
    this.poll = this.fbds.getPoll(this.pollID)
    this.poll.subscribe((snap: any) => {
      if (snap.options !== undefined) {
        for (let obj of snap.options) {
          this.total += obj.score;
          // console.log(obj.score);
        }
        // console.log(this.total);
      }
    });
  }
  func() {
    
  }

}
