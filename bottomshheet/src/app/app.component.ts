import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bottomshheet';
  isSheetOpen = false;

  openSheet() {
    this.isSheetOpen = true;
  }

  onSheetClose() {
    this.isSheetOpen = false;
  }
}
