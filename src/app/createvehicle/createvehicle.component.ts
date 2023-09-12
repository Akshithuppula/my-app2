import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { VehicleComponent } from '../vehicle/vehicle.component';
import { VehicleService } from '../vehicle.service';
import { ActivatedRoute } from '@angular/router';

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


  public id:any = "";

  constructor(private vehicleService:VehicleService, private activedRouter:ActivatedRoute){

    this.activedRouter.params.subscribe(
      (data:any)=>{
        this.id = data.id;

       this.vehicleService.getvehicledetails(this.id).subscribe(
        (data:any)=>{
          this.vehicleForm.patchValue(data);
        }
       )
      }
    )



  }

  submit(){
    console.log( this.vehicleForm);
    if(this.id){
      // edit- update
      this.vehicleService. updatavehicle(this.id,this.vehicleForm.value).subscribe(
        (data:any)=>{
          alert("updated successfully");
        },
        (err:any)=>{
          alert("Internal server error")
        }
      )
    }
    else{
      // Create
      this.vehicleService.createVehicle(this.vehicleForm.value).subscribe(
        (data:any)=>{
          alert("Created successgully");
        },
        (err:any)=>{
          alert("Internal server error");
        }
      )
        }

      }
    }
