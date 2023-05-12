import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page02',
  templateUrl: './page02.component.html',
  styleUrls: ['./page02.component.scss'],
})
export class Page02Component  implements OnInit {

  weight!: number;
  height!: number;
  age!: number;
  bmi: number = 0;
  bmr: number = 0;

  private readonly male : string = '1';
  private readonly female : string = '2';

  gender : string = '';
  bmiLevel: string = '';
  alertButtons = ['OK'];

  constructor() { }

  ngOnInit() {}

  selectGender(gender : any){
    this.gender = gender.detail.value;
  }

  bmrCalculate() {
    if(this.gender == this.male){
      this.bmr = (10 * this.weight) + (6.25 * this.height) - (5 * this.age) + 5;
    }else if(this.gender == this.female){
      this.bmr = (10 * this.weight) + (6.25 * this.height) - (5 * this.age) - 161;
    }
  }

}
