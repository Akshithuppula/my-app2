import { identifierName } from '@angular/compiler';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {


 @Input() public c1:number = 0;
 @Input() public c2:number = 0;
          public c3:number = 0;
 @Output()  cal:EventEmitter<any>=new EventEmitter();
 


sum(){
   this.cal.emit(this.c1 + this.c2)
}

sub(){
  this.cal.emit( this.c1 - this.c2)
}

mal(){
  this.cal.emit(this.c1 * this.c2)
}
}
