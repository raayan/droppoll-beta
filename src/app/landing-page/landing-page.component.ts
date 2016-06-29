import { Component, OnInit } from '@angular/core';
import { MdCard, MdCardTitleGroup, MdCardHeader, MD_CARD_DIRECTIVES} from '@angular2-material/card';
import { MdButton, MD_BUTTON_DIRECTIVES} from '@angular2-material/button';
import { MdInput,MdPlaceholder,MD_INPUT_DIRECTIVES} from '@angular2-material/input';
import { MdIcon, MD_ICON_DIRECTIVES} from '@angular2-material/icon';
import { FirebaseDataService } from '../firebase-data.service';
import {} from '@angular2-material/';

@Component({
  moduleId: module.id,
  selector: 'app-landing-page',
  templateUrl: 'landing-page.component.html',
  styleUrls: ['landing-page.component.css'],
  directives: [
    MdCard, MdCardHeader, MdCardTitleGroup, MD_CARD_DIRECTIVES,
    MdButton, MD_BUTTON_DIRECTIVES,
    MdInput,MdPlaceholder,MD_INPUT_DIRECTIVES
    ]
})
export class LandingPageComponent implements OnInit {
  poll: any;
  options: any[];
  constructor(private fbds: FirebaseDataService) {}

  ngOnInit() {
    this.initPoll();
  }
  initPoll() {
    this.poll = {
      name: "",
      author: "",
      options: [{value: "", score: 0}]
    };
  }
  checkPoll() {
    var tmp_options = []
    for (let e of this.poll.options) {
      if (e.value === "") {

      } else {
        tmp_options.push(e);
      }
    }
    return tmp_options;
  }
  cleanPoll() {
    var tmp_options = []
    for (let e of this.poll.options) {
      if (e.value === "") {

      } else {
        tmp_options.push(e);
      }
    }
    this.poll.options = tmp_options;
  }
  beforeCheck(option: any) {

  }
  afterCheck(option: any) {
    var filled = true;
    for (let e of this.poll.options) {
      if (e.value === "") {
        filled = false;
      }
    }
    if (filled) {
      this.poll.options.push({value: "", score: 0});
    } else {

    }
  }
  isFirst(i: number) {
    if (i === 0 && this.poll.options.length === 1) {
      return true;
    }
    return false;
  }
  removeOption(option: any) {
    var newoptions = []
    for (let e of this.poll.options) {
      if (e === option) {

      }else{
        newoptions.push(e);
      }
    }
    this.poll.options = newoptions;
  }
  submitPoll() {
    if (this.poll.name === "") {

    } else if (this.poll.author === "") {

    } else if (this.checkPoll().length === 0) {

    } else {
      this.cleanPoll();
      this.fbds.createPoll(this.poll);
      // Reset all fields
      this.initPoll();    
    }
  }
}
