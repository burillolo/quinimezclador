import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  @Output() public quiniOptionSelect: EventEmitter<{name: String, values: QuiniOpts[]}> =
    new EventEmitter<{name: String, values: QuiniOpts[]}>();

  availableOption = {1: QuiniOpts.Uno, 'X': QuiniOpts.X, 2: QuiniOpts.Dos};
  options: Match [] = MATCHES;
  selectedOptions: QuiniOpts[];

  constructor() {
    this.selectedOptions = [];
  }

  ngOnInit() {
  }

  onSelectionChange(option: Match, value: QuiniOpts) {
    this.selectedOptions [option.id] = value;
    const emiter: {name: String, values: QuiniOpts[]} = {name: this.currentName, values: this.selectedOptions};
    this.quiniOptionSelect.emit(emiter);
  }
}
