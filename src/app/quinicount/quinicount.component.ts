import { Component, OnInit, Input } from '@angular/core';
import { Match } from '../match';
import { MATCHES } from '../mock-match';
import { QuiniOpts } from '../options';
import { CountResult } from '../count-result';

@Component({
  selector: 'app-quinicount',
  templateUrl: './quinicount.component.html',
  styleUrls: ['./quinicount.component.css']
})
export class QuinicountComponent implements OnInit {
  availableOption = {1: QuiniOpts.Uno, 'X': QuiniOpts.X, 2: QuiniOpts.Dos};

  @Input() countResultsOptions: CountResult [];

  constructor() {
  }

  ngOnInit() {
  }

}
