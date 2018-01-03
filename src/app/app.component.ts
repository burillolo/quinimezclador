import { Component } from '@angular/core';
import { CountResult} from './count-result';
import { Match } from './match';
import { MATCHES } from './mock-match';
import { QuiniOpts } from './options';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quinimezclador';
  quiniCounts: CountResult [];
  options: Match [] = MATCHES;
  quiniNames: String [];
  quiniInputs: Map<String, Array<Object>>;

  constructor() {
    this.quiniInputs = new Map;
    this.quiniCounts = [];
    this.quiniNames = [];
    for (let index = 0; index < this.options.length; index++) {
      this.quiniCounts.push({match: this.options[index], results: {1: 0, 'X': 0, 2: 0}});
    }
  }

  addQuiniName(quiniName: String) {
    this.quiniNames.push(quiniName);
    this.quiniInputs.set(quiniName, []);
  }

  public refreshCounterValues(quiniValues: {name: String, values: QuiniOpts[]}) {
    const quiniName: String = quiniValues.name;
    const values: QuiniOpts [] = quiniValues.values;
    this.quiniInputs.set(quiniName, values);
    this.quiniCounts = [];

    for (let index = 0; index < this.options.length; index++) {
      this.quiniCounts.push({match: this.options[index], results: {1: 0, 'X': 0, 2: 0}});
    }
    const resultEntriesIt = this.quiniInputs.entries();
    for (let resultEntry = resultEntriesIt.next(); !(resultEntry.done);
      resultEntry = resultEntriesIt.next()) {
      const result = resultEntry.value [1];
      for (const match of this.options) {
        const matchResult: any = result [match.id];
        switch (matchResult) {
          case '1':
            this.quiniCounts[match.id - 1].results [1]++;
            break;
          case 'X':
            this.quiniCounts[match.id - 1].results ['X']++;
            break;
          case '2':
            this.quiniCounts[match.id - 1].results [2]++;
            break;
          default:
        }
      }
    }
  }
}
