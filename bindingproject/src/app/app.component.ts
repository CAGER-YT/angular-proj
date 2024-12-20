import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bindingproject';
  company = 'Onesoft';
  isMale =true;
  num=10;
  inc(){
    return this.num++;
  }
}
