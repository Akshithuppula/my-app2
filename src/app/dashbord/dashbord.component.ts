import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent {

  constructor(private router:Router){}
  logout(){
    this.router.navigateByUrl("/login");
    localStorage.removeItem('token')
  }
}
