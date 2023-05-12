import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page01',
  templateUrl: './page01.component.html',
  styleUrls: ['./page01.component.scss'],
})
export class Page01Component  implements OnInit {

  weight!: number;
  height!: number;
  bmi: number = 0;
  bmiLevel: string = '';
  alertButtons = ['OK'];

  constructor() { }

  ngOnInit() {}


  bmiCalculate() {
    this.bmi = this.weight / (this.height * this.height);
    if (this.bmi < 18.5) {
      this.bmiLevel = 'Underweight';
    } else if (this.bmi >= 18.5 && this.bmi < 25) {
      this.bmiLevel = 'Normal weight';
    } else if (this.bmi >= 25 && this.bmi < 30) {
      this.bmiLevel = 'Overweight';
    } else if (this.bmi >= 30 && this.bmi < 35) {
      this.bmiLevel = 'Obese';
    }else if(this.bmi > 35){
      this.bmiLevel = 'Extremely Obese';
    }
  }
}