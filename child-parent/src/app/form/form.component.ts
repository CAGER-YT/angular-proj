// import { Component, EventEmitter, Output } from '@angular/core';

// @Component({
//   selector: 'app-form',
//   templateUrl: './form.component.html',
//   styleUrls: ['./form.component.css']
// })
// export class FormComponent {
//   name: string = '';
//   names: string[] = []; 

//   @Output() nameAdded = new EventEmitter<string[]>(); // Add this line

//   submit() {
//     if (this.name) {
//       this.names.push(this.name);
//       this.name = '';
//       this.nameAdded.emit(this.names); // Emit the updated name array
//     }
//   }


// }

import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  name: string = '';
  @Output() message = new EventEmitter<string>();

  submit(){
    this.message.emit(this.name);
    this.name = '';
}
}