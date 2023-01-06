import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ChoiceComponent } from './choice/choice.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeesComponent } from './employees/employees.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MyhomeComponent } from './myhome/myhome.component';
//import { MyhomeComponent } from './myhome/myhome.component';
// import { NavComponent } from './myhome/nav/nav.component';
// import { UsersComponent } from './myhome/users/users.component';


import { AuthGuard } from './shared/auth.guard';
import { UserDetailsComponent } from './user-details/user-details.component';
//observable,subject,behaviour
const routes: Routes = [
  // {
  //   path:'',
  //   component:AppComponent
  // },
  {
    path: '',
    component: LoginComponent,

  },
  {
    path:'choice',
    component:ChoiceComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'home/employees',
    component: HomeComponent,
    canActivate: [AuthGuard]
    
  },
  {
    path: 'employees',
    component: EmployeesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'employeeDetails/current',
    component: EmployeeDetailComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'employeeDetails/userdetails/:id',
    component: UserDetailsComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'myhome/users',
    component:MyhomeComponent,
    canActivate: [AuthGuard]
  }
  // {
  //   path:'myhome',
  //   component:MyhomeComponent, 
    // children:[
    //   {
    //     path:'nav',
    //     component:NavComponent,
    //   },
    //   {
    //     path:'users',
    //     component:UsersComponent
    //   }
    // ]
  // }

  // {
  //   path:'',
  //   component:AppComponent,
  //   children:[{
  //       path:'',
  //       component: LoginComponent}
  // ]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
