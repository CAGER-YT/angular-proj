import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnChanges,OnInit,DoCheck,OnDestroy,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked{


  @Input() txt: string[] = [];
  ngOnChanges(){
    console.log('List Created');
  }
  ngOnInit() {
      if(this.txt.length == 0){
        this.txt.push("Welcome");
        console.log('List has been updated');
      }
  }
  len=0;
  ngDoCheck(){
    if(this.txt.length>this.len){
      console.log('Array has Data');
      this.len = this.txt.length;
  }
}
ngOnDestroy() {
  console.log('List Destroyed');
}
ngAfterContentInit(): void {
  console.log('List Content Init');
}
ngAfterContentChecked(): void {
  if(this.txt.length>0){
    console.log('List Content Checked');
  }
}
ngAfterViewInit(): void {
    console.log('List View Init');
}
ngAfterViewChecked(): void {
    if(this.txt.length>0){
      console.log('List View Checked');
    }
}

}
