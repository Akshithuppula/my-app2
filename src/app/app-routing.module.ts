import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { BmiComponent } from './bmi/bmi.component';
import { DirectivesComponent } from './directives/directives.component';
import { TableComponent } from './table/table.component';
import { MarksheetComponent } from './marksheet/marksheet.component';
import { pipe } from 'rxjs';
import { PipesComponent } from './pipes/pipes.component';
import { GradeComponent } from './grade/grade.component';
import { GameComponent } from './game/game.component';
import { BankComponent } from './bank/bank.component';
import { UsersComponent } from './users/users.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { AccountComponent } from './account/account.component';
import { SbiComponent } from './sbi/sbi.component';
import { PracticeComponent } from './practice/practice.component';
import { AxisComponent } from './axis/axis.component';
import { IciciComponent } from './icici/icici.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { EmailComponent } from './email/email.component';
import { ActivityComponent } from './activity/activity.component';
import { PhotoComponent } from './photo/photo.component';
import { BooksComponent } from './books/books.component';
import { CreatevehicleComponent } from './createvehicle/createvehicle.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { CreateusersComponent } from './createusers/createusers.component';
import { authenticationGuard } from './authentication.guard';
import { notifyGuard } from './notify.guard';
import { VehicledetailsComponent } from './vehicledetails/vehicledetails.component';
import { AccountdetailsComponent } from './accountdetails/accountdetails.component';
import { TodoappComponent } from './todoapp/todoapp.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'todoapp',component:TodoappComponent},
  {path:'dashboard', component:DashbordComponent,canActivate:[authenticationGuard],children:[
    {path:'home', component:HomeComponent},
    {path:'about', component:AboutComponent},
    {path:'data-binding', component: DataBindingComponent},
    {path:'calculator', component: CalculatorComponent},
    {path:'rectangle',component: RectangleComponent},
    {path:'bmi', component: BmiComponent},
    {path:'directives',component: DirectivesComponent},
    {path:'table',component: TableComponent},
    {path:'marksheet',component: MarksheetComponent},
    {path:'pipes',component: PipesComponent},
    {path:'grade',component: GradeComponent},
    {path:'game',component: GameComponent},
    {path:'bank',component: BankComponent},
    {path:'users',component: UsersComponent},
    {path:'vehicle',component: VehicleComponent},
    {path:'account',component: AccountComponent},
    {path:'sbi',component: SbiComponent},
    {path:'practice',component: PracticeComponent },
    {path:'axis',component: AxisComponent},
    {path:'icici',component: IciciComponent},
    {path:'flipkart',component:FlipkartComponent},
    {path:'email',component:EmailComponent},
    {path:'activity',component:ActivityComponent},
    {path:'photo',component:PhotoComponent},
    {path:'books',component:BooksComponent},
    {path:'createvehicle',component:CreatevehicleComponent},
    {path:'createaccount',component:CreateaccountComponent},
    {path:'createusers',component:CreateusersComponent,canDeactivate:[notifyGuard]},
    {path:'vehicledetails/:id',component:VehicledetailsComponent},
    {path:'editvehicle/:id',component:CreatevehicleComponent},
    {path:'accountdetails/:id',component:AccountdetailsComponent},
   {path:'editaccount/:id',component:CreateaccountComponent},
   {path:'parent',component:ParentComponent},
   {path:'child',component:ChildComponent}
  ]},
  {path:'',component: LoginComponent},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
