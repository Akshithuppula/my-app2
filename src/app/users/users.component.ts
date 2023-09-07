import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { UsersService } from '../users.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {


  public users:any = [];
  public term:any = [];
  public column:any = [];
  public order:any = [];
  public limit:any = [];
  public page:any = [];


 constructor(private _userService:UsersService) {

     _userService.getUser().subscribe(

      (data:any)=>{
        this.users = data;
      },

      (err:any)=>{
        alert("Internal server error");
      }
    ) 
  }
  getfilteruser(){
    this._userService.getfilteruser(this.term).subscribe(
      (data:any)=>{
        this.users = data;
      },
      (err:any)=>{
        alert("Internal server error");
      }
    )
    }

    getsortuser(){
      this._userService.getsortbyuser(this.column,this.order).subscribe(
        (data:any)=>{
          this.users = data;
        },
        (err:any)=>{
          alert("Internal server error")
        }
      )
    }

    getdeleteuser(id:any){
      this._userService.getdeleteuser(id).subscribe(
        (data:any)=>{
          alert("delete succesfully");
          location.reload()
        },
        (err:any)=>{
          alert("Internal server error");
        }
      )
    }

    getpageuser(){
      this._userService.getpageuser(this.limit,this.page).subscribe(
        (data:any)=>{
          this.users = data;
        },
      (err:any)=>{
        alert("Internal serve error")
      }
      )
    }
  }
