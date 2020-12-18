import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeeListComponent} from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import {UpdateEmployeeComponent} from './update-employee/update-employee.component';
import {EmployeeDetailsComponent} from './employee-details/employee-details.component';
import {LogInComponent}           from './log-in/log-in.component';
import {HomeComponent}            from './home/home.component';
import{SignUpComponent}   from         './sign-up/sign-up.component';
import{AboutUsComponent}  from         './about-us/about-us.component'; 
import {DisplayComponentComponent} from './display-component/display-component.component'; 

 const routes: Routes = [
  {path:'employees' ,component :EmployeeListComponent},
  {path:'create-employee' , component : CreateEmployeeComponent},
  {path: 'update-employee/:id' , component:UpdateEmployeeComponent},
  {path:'employee-details/:id' ,component:EmployeeDetailsComponent},
  {path:'login' ,component:LogInComponent},
  {path:'home'  ,component:HomeComponent  }, 
  {path:'sign-up' , component : SignUpComponent}, 
  {path:'about-us' , component : AboutUsComponent},
   {path:'Display' , component : DisplayComponentComponent},
  {path:'', redirectTo:	'home' , pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
