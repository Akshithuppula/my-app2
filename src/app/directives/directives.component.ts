import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {

public time:number = 0




  public ages:number[] = [10,20,30,40,50];

  public states:string[] = ['Telanagana', 'Andhra pradesh', 'Karnataka', 'tamilnadu'];


  public users:any = [
    {name:'akhilesh',age:3,marks:90,phone:82328983},
    {name:' nikhilesh',age:13,marks:22,phone:483729329},
    {name:'sai eshwar',age:14,marks:77,phone:872339812},
    {name:'jayanth reddy',age:25,marks:11,phone:457726272},
  ];


  public term:string = "";

  filter(){
    this.users = this.users.filter((value:any)=>value.name.includes(this.term))
  }

  ageHighToLow(){
    this.users = this.users.sort((a:any,b:any)=>b.age-a.age);
  }

  ageLowToHigh(){
    this.users = this.users.sort((a:any,b:any)=>a.age-b.age);
  }


  increaseByOne(){
    this.users = this.users.map((value:any)=>{
      value.age = value.age+1;
      return value;
    });
  }
  

  total(){
    let total = this.users.reduce((sum:any,a:any)=>sum+a.age,0)
    alert(total);
  }

  delete(i:any){
    this.users.splice(i,1);
  }


}
