import { Component } from '@angular/core';

@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styleUrls: ['./grade.component.css']
})
export class GradeComponent {

  public marks:any;

  public result:any = 0;

  grade(){
     this.result = this.marks
  }
  
}
