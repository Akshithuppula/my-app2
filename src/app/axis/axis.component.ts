import { Component } from '@angular/core';
import { AxisService } from '../axis.service';

@Component({
  selector: 'app-axis',
  templateUrl: './axis.component.html',
  styleUrls: ['./axis.component.css']
})
export class AxisComponent {

public axis:any = [];

  constructor(private _axisService:AxisService){
   _axisService.getAxis().subscribe(
    (data:any)=>{
      this.axis = data;
    },
    (err:any)=>{
      alert("Internal server error")
    }
   )
}
}