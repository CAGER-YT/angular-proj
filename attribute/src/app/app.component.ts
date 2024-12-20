import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'attribute';
  isActive = true;
  dynamicStyles = {
    'background-color': 'yellow',
    'font-size': '20px'
  };
}
