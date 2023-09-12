import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent {


public vehicles:any = [];
public term : string = '';
public column:string = "";
public order:string = "";
public limit:any = [];
public page:any = [];


constructor(private vehicleService:VehicleService, private router:Router){

vehicleService.getVehicle().subscribe(
  (data:any)=>{
    this.vehicles = data;
  },
  (err:any)=>{
    alert("Internal server error");
  }
)
}

getFilteredvehicle(){
 this.vehicleService.getFilteredvehicle(this.term).subscribe(
  (data:any)=>{
    this.vehicles = data;
  },
  (err:any)=>{
    alert("Internal server error");
  }
 )
}

getSortedByvehicle(){
  this.vehicleService.getSortedByvehicle(this.column,this.order).subscribe(
    (data:any)=>{
      this.vehicles = data;
    
    },
    (err:any)=>{
      alert("Internal server error");
    }
  )
}

getdeletevehicle(id:any){
  this.vehicleService.getdeletevehicle(id).subscribe(
    (data:any)=>{
      alert("delete succesfully");
      location.reload()
    },
    (er:any)=>{
      alert("Inetrnal server error");
    }
  )
}
getpagedvehicle(){
  this.vehicleService.getPagedvehicle(this.limit,this.page).subscribe(
    (data:any)=>{
      this.vehicles = data;
    },
    (err:any)=>{
      alert("Internal serve error")
    }
  )
}


view(id:number){
  this.router.navigateByUrl('/dashboard/vehicledetails/'+id);
}

edit(id:number){
  this.router.navigateByUrl('/dashboard/editvehicle/'+id);
}
}