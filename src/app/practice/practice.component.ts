import { Component } from '@angular/core';
import { PracticeService } from '../practice.service';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent {


public practices:any = [];

constructor(private _practicesService:PracticeService){

  _practicesService.getpractice().subscribe(
    (data:any)=>{
      this.practices = data.entries;
    },
    (err:any)=>{
      alert("Internal server error")
    }
  )

}

}
