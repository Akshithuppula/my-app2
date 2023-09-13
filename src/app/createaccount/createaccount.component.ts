import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AccountService } from '../account.service';
import { ActivatedRoute } from '@angular/router';

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

  public id:any = [];

  constructor(private accountService:AccountService, private activatedRoute: ActivatedRoute){

    this.activatedRoute.params.subscribe(
      (data:any)=>{
        this.id = data.id;

       this.accountService.getaccountd(this.id).subscribe(
        (data:any)=>{
          this.accountForm.patchValue(data);
        }
       )
      }
    )

  }

submit(){
  console.log(this.accountForm);

 if(this.id){
                   //  edit
   this.accountService.updateaccount(this.id,this.accountForm.value).subscribe(
    (data:any)=>{
      alert("updata successfully");
    },
    (err:any)=>{
      alert("internal server error");
    }
   )
  }
else{
  this.accountService.createaccount(this.accountForm.value).subscribe(
    (data:any)=>{
      alert("Created successfully");
    },
    (err:any)=>{
      alert("Internal server error");
    }
  )
}

}
}
