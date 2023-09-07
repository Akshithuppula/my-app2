import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { VehicleComponent } from '../vehicle/vehicle.component';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-createvehicle',
  templateUrl: './createvehicle.component.html',
  styleUrls: ['./createvehicle.component.css']
})
export class CreatevehicleComponent {

  public vehicleForm: FormGroup = new FormGroup({
    Vehicle:new FormControl(),
    manufacturer:new FormControl(),
    model:new FormControl(),
    type:new FormControl(),
    fuel:new FormControl(),
    color:new FormControl(),
    id:new FormControl(),
  });

  constructor(private vehicleService:VehicleService){}

  submit(){
    console.log( this.vehicleForm);

    this.vehicleService.createVehicle(this.vehicleForm.value).subscribe(
      (data:any)=>{
        alert("Vehicle created successfully");
      },
      (err:any)=>{
        alert("Vehicle creation error")
      }
      
    )
  }

  
  


}
