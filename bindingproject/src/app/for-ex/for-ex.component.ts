import { Component } from '@angular/core';

@Component({
  selector: 'app-for-ex',
  templateUrl: './for-ex.component.html',
  styleUrl: './for-ex.component.css'
})
export class ForExComponent {

   names: string[] = ["prakash", "onesoft", "helloworld"];

  emp=[
      { name: "santhosh", designation: "Developer", salary: 50000 },
      { name: "Pechinathan", designation: "FullStack", salary: 100000 },
      { name: "Rajech", designation: "Tester", salary: 90000000 }
];
}
