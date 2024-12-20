import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactive-forms';
  myform = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(5)]),
    age: new FormControl('', [Validators.required, Validators.min(18)]),
    address: new FormGroup({
      door: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required)
    })
  });

  get name() {
    return this.myform.get('name');
  }

  get age() {
    return this.myform.get('age');
  }
  submit() {
    console.log(this.myform);
    console.log(this.myform.value);

    // if (this.myform.valid) {
    //   console.log(this.myform);
    // } else {
    //   console.log('Form is invalid');
    // }
  }
  get door() {
    return this.myform.get('address.door');
  }
  
  // isEligible(): boolean {
  //   return this.age?.value >= 18;
  // }
}