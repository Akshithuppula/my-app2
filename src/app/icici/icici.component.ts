import { Component } from '@angular/core';
import { IciciService } from '../icici.service';

@Component({
  selector: 'app-icici',
  templateUrl: './icici.component.html',
  styleUrls: ['./icici.component.css']
})
export class IciciComponent {


public icici:any =[];

constructor(private _iciciService:IciciService){
 _iciciService.geticicic().subscribe(
  (data:any)=>{
    this.icici = data;
  },
  (err:any)=>{
    alert("Internal server error")
  }
 )

}
}
