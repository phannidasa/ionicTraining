import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';

@Component({selector: 'app-home', templateUrl: 'home.page.html', styleUrls: ['home.page.scss']})
export class HomePage {

    name : string = '';
    age : number = 0;
    gender : string = '';
    favColor : string = '';
    favFood : string = '';
    line : string = '';
    facebook : string = '';
    instagram : string = '';

    constructor(
      private router: Router,
    ) {}

    updateInput(inputName : string) {
        const inputElement = document.getElementById(inputName + '-input')as HTMLInputElement;
        const checkboxElement = document.getElementById(inputName + '-checkbox')as HTMLInputElement;

        inputElement.disabled = ! checkboxElement.checked;
    }

    saveData() {
        console.log("name : " , this.name);
        console.log("age : " ,this.age);
        console.log("gender : " ,this.gender);
        console.log("favorite color : " ,this.favColor);
        console.log("favorite food : " ,this.favFood);
        console.log("line : " ,this.line);
        console.log("facebook : " ,this.facebook);
        console.log("instagram : " ,this.instagram);
    }

    bmiPage(){
      this.router.navigate(['./page1']);
    }
}
