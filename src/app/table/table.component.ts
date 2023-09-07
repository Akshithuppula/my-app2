import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

public prices:number[] =[10,13000,400,200,300,400];

public products:any = [
  {name:'pen' ,price:10,rating:3,freedelivery:true},
  {name:'phone' ,price:13000,rating:2,freedelivery:false},
  {name:'shirt' ,price:400,rating:4,freedelivery:true},
  {name:'cap' ,price:200,rating:5,freedelivery:false},
  {name:'mobilecase' ,price:300,rating:2,freedelivery:true},
  {name:'remote' ,price:400,rating:2.5,freedelivery:false},
  ];

  public term:string = "";

  filter(){
    this.products = this.products.filter((value:any)=>value.name.includes(this.term))
  }

  freedelivery(){
    this.products = this.products.filter((value:any)=>value.freedelivery==true)
  }

  priceLowToHigh(){
    this.products = this.products.sort((a:any,b:any)=>a.price-b.price);
  }

  priceHighToLow(){
    this.products = this.products.sort((a:any,b:any)=>b.price-a.price);
  }

  ratingHighToLow(){
    this.products = this.products.sort((a:any,b:any)=>b.rating-a.rating);
  }

  ratingLowToHigh(){
    this.products = this.products.sort((a:any,b:any)=>a.rating-b.rating);
  }

  applydiscount(){
    this.products = this.products.map((value:any)=>{
      value.price = value.price/2;
      return value;
    })
  }

  deliverycharge(){
    this.products = this.products.map((value:any)=>{
      value.price = value.price+30;
      return value;
    })
  }

  total(){
    let total = this.products.reduce((sum:any,a:any)=>sum+a.price,0)
    alert(total);
  }

  cartitems(){
     let total = this.products.length;
    alert(total)
  }


  










}
