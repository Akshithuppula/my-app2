import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from '../account.service';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-accountdetails',
  templateUrl: './accountdetails.component.html',
  styleUrls: ['./accountdetails.component.css']
})
export class AccountdetailsComponent {

public account:any = [];
public id:any = [];

constructor(private activatedRoute:ActivatedRoute, private accountservice:AccountService){

  activatedRoute.params.subscribe(
   (data:any)=>{
    this.id = data.id;
    accountservice. getvehicledetails(this.id).subscribe(
      (data:any)=>{
        this.account= data;
      }
    )
   } 
  )
}

}
