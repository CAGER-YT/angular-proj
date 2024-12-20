import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  name: string = '';
  names: string[] = [];
  isClicked: boolean = false;

  submit() {
    this.names.push(this.name);
    this.name = '';
  }
}
