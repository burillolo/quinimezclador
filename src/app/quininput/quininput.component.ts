import { Component, OnInit, Input } from '@angular/core';
import { MATCHES } from '../mock-match';
import { Match } from '../match';
import { QuiniOpts} from '../options';

@Component({
  selector: 'app-quininput',
  templateUrl: './quininput.component.html',
  styleUrls: ['./quininput.component.css']
})
export class QuininputComponent implements OnInit {

  @Input() currentName: String;

  availableOption = {1: QuiniOpts.Uno, 'X': QuiniOpts.X, 2: QuiniOpts.Dos};
  selectedOptions: QuiniOpts[];
  options: Match [] = MATCHES;

  constructor() { }

  ngOnInit() {
  }

  onSelectionChange(option, value) {
    const entryChanged = option;
    const valueChanged = value;
  }
}
