import { Component, OnInit } from '@angular/core';
import { Match } from '../match';
import { MATCHES } from '../mock-match';
import { QuiniOpts } from '../options';

class CountResult {
  match: Match;
  results: Object;
}

@Component({
  selector: 'app-quinicount',
  templateUrl: './quinicount.component.html',
  styleUrls: ['./quinicount.component.css']
})
export class QuinicountComponent implements OnInit {
  availableOption = {1: QuiniOpts.Uno, 'X': QuiniOpts.X, 2: QuiniOpts.Dos};
  options: Match [] = MATCHES;
  countResultsOptions: CountResult [];

  constructor() {
    this.countResultsOptions = [];
  }

  ngOnInit() {
    for (let index = 0; index < this.options.length; index++) {
      this.countResultsOptions.push({match: this.options[index], results: {1: 0, 'X': 0, 2: 0}});
    }
  }

}
