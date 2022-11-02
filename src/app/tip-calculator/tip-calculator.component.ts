import { Component } from '@angular/core';

@Component({
  selector: 'app-tip-calculator',
  templateUrl: './tip-calculator.component.html',
  styleUrls: ['./tip-calculator.component.css']
})
export class TipCalculatorComponent {
  bill: number = 0.00;
  tip: number = 15;
  peopleCount: number = 1;
  tipTotal: number = 0.00;
  totalValue: number = 0.00;
  constructor() { }

  onChange(type: string) {
    this.peopleCount = this.peopleCount > 0 ? this.peopleCount : 1;
    this.bill = this.bill > -1 ? this.bill : 0.00;
    console.log(this.bill, this.peopleCount, this.tip);
    if (type === "bill" || type === "people" || type === "tip") {
      if (this.bill > 0) {
        if (this.peopleCount === 1) {
          this.tipTotal = this.bill * (this.tip / 100);
          this.totalValue = this.bill + this.tipTotal;
        } else {
          this.tipTotal = (this.bill * (this.tip / 100)) / this.peopleCount;
          this.totalValue = (this.bill + this.tipTotal) / this.peopleCount;
        }
      }
    }
  }

}
