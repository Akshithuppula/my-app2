import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { BmiComponent } from './bmi/bmi.component';
import { DirectivesComponent } from './directives/directives.component';
import { TableComponent } from './table/table.component';
import { MarksheetComponent } from './marksheet/marksheet.component';
import { PipesComponent } from './pipes/pipes.component';
import { GradeComponent } from './grade/grade.component';
import { GameComponent } from './game/game.component';
import { BankComponent } from './bank/bank.component';
import { PricePipe } from './price.pipe';
import { YearsPipe } from './years.pipe';
import { ImpDirective } from './imp.directive';

import {HttpClientModule} from '@angular/common/http';
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
import { VehicledetailsComponent } from './vehicledetails/vehicledetails.component';
import { AccountdetailsComponent } from './accountdetails/accountdetails.component';
import { TodoappComponent } from './todoapp/todoapp.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ItemComponent } from './item/item.component';
import { NavComponent } from './nav/nav.component';
import { CartComponent } from './cart/cart.component';
import { PhoneComponent } from './phone/phone.component';
import { AboutModule } from './about/about.module';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashbordComponent,
    PageNotFoundComponent,
    HomeComponent,
    AboutComponent,
    DataBindingComponent,
    CalculatorComponent,
    RectangleComponent,
    BmiComponent,
    DirectivesComponent,
    TableComponent,
    MarksheetComponent,
    PipesComponent,
    GradeComponent,
    GameComponent,
    BankComponent,
    PricePipe,
    YearsPipe,
    ImpDirective,
    UsersComponent,
    VehicleComponent,
    AccountComponent,
    SbiComponent,
    PracticeComponent,
    AxisComponent,
    IciciComponent,
    FlipkartComponent,
    EmailComponent,
    ActivityComponent,
    PhotoComponent,
    BooksComponent,
    CreatevehicleComponent,
    CreateaccountComponent,
    CreateusersComponent,
    VehicledetailsComponent,
    AccountdetailsComponent,
    TodoappComponent,
    ParentComponent,
    ChildComponent,
    ItemComponent,
    NavComponent,
    CartComponent,
    PhoneComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AboutModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
