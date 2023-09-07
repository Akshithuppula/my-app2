import { Component } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent { 

public accounts:any = [];
public term:any = [];
public column:string = "";
public order:string = "";
public limit:any =[];
public page:any = [];


constructor(private accountsService:AccountService){
  
  accountsService.getAccount().subscribe(
    (data:any)=>{
      this.accounts = data;
    },
    (err:any)=>{
      alert("Internal server error");
    }
  )
  }

 getfilteraccount(){
  this.accountsService.getfilteraccount(this.term).subscribe(
    (data:any)=>{
      this.accounts = data;
    },
    (err:any)=>{
      alert("Internal server error");
    }
  )
 }

 getsortedaccount(){
  this.accountsService.getSortedByaccount(this.column,this.order).subscribe(
    (data:any)=>{
      this.accounts = data;
    },
    (err:any)=>{
      alert("Internal serve error");
    }
  )
 }

 getdeleteaccount(id:any){
  this.accountsService.getdeleteaccount(id).subscribe(
    (data:any)=>{
      alert("delete succesfully")
      location.reload()
    },
    (err:any)=>{
      alert("Internal server error")
    }
  )
 }
 getpageaccount(){
  this.accountsService.getpagedaccount(this.limit,this.page).subscribe(
    (data:any)=>{
      this.accounts=data;
    },
    (err:any)=>{
      alert("Internal server error")
    }
  )
 }

}




