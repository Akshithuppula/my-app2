import { publishFacade } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-todoapp',
  templateUrl: './todoapp.component.html',
  styleUrls: ['./todoapp.component.css']
})
export class TodoappComponent {

  public terms:string[] = [];
  public value:string = "";

  add(){
    this.terms.push(this.value)
    console.log(this.terms);
    
  }

  delete(i:number){
    this.terms.splice(i,1)
  }
}


