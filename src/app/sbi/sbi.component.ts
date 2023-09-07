import { Component } from '@angular/core';
import { SbiService } from '../sbi.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sbi',
  templateUrl: './sbi.component.html',
  styleUrls: ['./sbi.component.css']
})
export class SbiComponent {

public sbis:any = [];

constructor(private _sbisService:SbiService){

_sbisService.getsbi().subscribe(
  (data:any)=>{
    this.sbis = data;
  },
  (err:any)=>{
    alert("Internal server error");
  }
)
}
}