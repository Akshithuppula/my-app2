import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-createusers',
  templateUrl: './createusers.component.html',
  styleUrls: ['./createusers.component.css']
})
export class CreateusersComponent {

  public usersForm: FormGroup = new FormGroup({
    name: new FormControl("",[Validators.required,Validators.minLength(3)]),
    phone: new FormControl("",[Validators.required,Validators.min(1000000000),Validators.max(9999999999)]),
    city: new FormControl(),
    fee: new FormControl(),
    address: new FormGroup({
      hno: new FormControl(),
      state: new FormControl("",[Validators.required]),
      pin: new FormControl("",[Validators.required,Validators.min(100000),Validators.max(999999)])
    }),
    type: new FormControl(),
    busFee: new FormControl(),
    hostelFee: new FormControl(),
    cards: new FormArray([])
    });

    get cardsFormArray(){
      return this.usersForm.get('cards') as FormArray;
    }

    addCards(){
      this.cardsFormArray.push(
        new FormGroup({
          no: new FormControl(),
          exp: new FormControl(),
          cvv: new FormControl("",[Validators.required,Validators.min(100),Validators.max(999)]),
        })
      )
    }

    deleteCard(i:number){
      this.cardsFormArray.removeAt(i);
    }
     
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
