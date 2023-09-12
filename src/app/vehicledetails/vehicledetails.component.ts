import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicledetails',
  templateUrl: './vehicledetails.component.html',
  styleUrls: ['./vehicledetails.component.css']
})
export class VehicledetailsComponent {


  public vehicle:any = [];
  public id:any= [];

constructor(private activatedRoute:ActivatedRoute, private vehicleService:VehicleService) {

  activatedRoute.params.subscribe(
    (data:any)=>{
      this.id = data.id;

      vehicleService.getvehicledetails(this.id).subscribe(
        (data:any)=>{
        this.vehicle = data;
        }
      )
    }
  )
}





}

