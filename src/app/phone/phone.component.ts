import { Component } from '@angular/core';
import { PhoneService } from '../phone.service';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})
export class PhoneComponent {

  public phone:any= "";
  public term:string = "";

  constructor (private phoneService:PhoneService){
    phoneService.getphone().subscribe(
        (data:any)=>{
          this.phone = data;
        },
        (err:any)=>{
          alert("internal server error")
        }
    )
  }
  getfilter(){
    this.phone.results = this.phone.results.filter((value:any)=>value.name.first.includes(this.term) || value.name.last.includes(this.term)
    );
  }

}
