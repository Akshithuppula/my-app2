import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-createusers',
  templateUrl: './createusers.component.html',
  styleUrls: ['./createusers.component.css']
})
export class CreateusersComponent {

  public usersForm: FormGroup = new FormGroup({
    name: new FormControl(),
    phone: new FormControl(),
    city: new FormControl(),
    fee: new FormControl(),
    });
     
    constructor(private createusersService:UsersService ){}

    submit(){
      console.log( this.usersForm);

      this.createusersService.createusers(this.usersForm.value).subscribe(
        (data:any)=>{
          alert("users created successfully");
        },
        (err:any)=>{
          alert("users creation failed")
        }
      )
    }

}
