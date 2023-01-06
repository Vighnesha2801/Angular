import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../shared/auth.guard';
import { UserDetailsComponent } from '../user-details/user-details.component';
import { BehaveComponent } from './behave/behave.component';
import { BehaviorparentComponent } from './behaviorparent/behaviorparent.component';
import { DetailsComponent } from './details/details.component';
import { NavComponent } from './nav/nav.component';
import { SubjectComponent } from './subject/subject.component';
import { SubjectparentComponent } from './subjectparent/subjectparent.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path:'nav',
    component:NavComponent
  },
  {
    path:'users',
    component:UsersComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'myhome/users/:id',
    component:DetailsComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'subjectparent',
    component:SubjectComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'behaveparent',
    component:BehaveComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyhomeRoutingModule { }
