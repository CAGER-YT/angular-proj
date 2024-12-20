import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routing-example';

  constructor(private d: Router) {};
    // console.log('AppComponent created');
    home(){
      this.d.navigate(['home']);
    }
    about(){
      this.d.navigate(['about']);
    }
    contact(){
      this.d.navigate(['contact']);
    }
}
