import { Component } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  showPopup = false;
  subscription: any;

  togglePopup() {
    this.showPopup = !this.showPopup;
    if (this.showPopup) {
      this.subscription = of(null).pipe(delay(3000)).subscribe(() => {
        this.showPopup = false;
      });
    } else if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}