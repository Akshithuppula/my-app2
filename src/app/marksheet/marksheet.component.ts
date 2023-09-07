import { Component } from '@angular/core';

@Component({
  selector: 'app-marksheet',
  templateUrl: './marksheet.component.html',
  styleUrls: ['./marksheet.component.css']
})
export class MarksheetComponent {

public marksheets:any = [
  {name:"pen",price:10,rating:3,freedelivery:true},
  {name:"pen",price:10,rating:3,freedelivery:true},
  {name:"pen",price:10,rating:3,freedelivery:true},
  {name:"pen",price:10,rating:3,freedelivery:true},
  {name:"pen",price:10,rating:3,freedelivery:true},
];



}
