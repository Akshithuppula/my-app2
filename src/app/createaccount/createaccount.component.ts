import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.css']
})
export class CreateaccountComponent {

public accountForm: FormGroup = new FormGroup({
  account_name: new FormControl(),
  available_balance: new FormControl(),
  account_number: new FormControl(),
  city: new FormControl()
});

  constructor(private createaccountService:AccountService){}

submit(){
  console.log(this.accountForm);

  this.createaccountService.createaccount(this.accountForm.value).subscribe(
    (data:any)=>{
      alert("Account created successfully");
    },
    (err:any)=>{
      alert("Account creation failed");
    }
  )

}

}
