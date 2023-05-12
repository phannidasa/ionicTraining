import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(
    private router: Router,
  ) {}

  chagePage(page : string){
    if(page == 'bmi'){
      this.router.navigate(['/page01']);
    }else if(page == 'bmr'){
      this.router.navigate(['/page02']);
    }else if(page == 'aboutMe'){
      this.router.navigate(['/page03']);
    }
  }

}