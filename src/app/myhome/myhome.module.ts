import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyhomeRoutingModule } from './myhome-routing.module';
// import { MyhomeComponent } from './myhome/myhome.component';
import { NavComponent } from './nav/nav.component';
import { MyhomeComponent } from './myhome.component';
// import { UsersComponent } from './users/users.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { UsersComponent } from './users/users.component';
import { ChildComponent } from './child/child.component';
import { DetailsComponent } from './details/details.component';
import { FilterPipe } from './pipe/filter.pipe';
// import { SubjectparentComponent } from './subjectparent/subjectparent.component';
// import { SubjectchildComponent } from './subjectchild/subjectchild.component';
import { Subject,Observable,BehaviorSubject } from 'rxjs';
import { WebServiceService } from './web-service.service';
import { SubjectparentComponent } from './subjectparent/subjectparent.component';
import { SubjectchildComponent } from './subjectchild/subjectchild.component';
import { BehaviorparentComponent } from './behaviorparent/behaviorparent.component';
import { BehaviorchildComponent } from './behaviorchild/behaviorchild.component';
import { SubjectComponent } from './subject/subject.component';
import { BehaveComponent } from './behave/behave.component';
// import { SubjectMessageService } from './subject-message.service';
// import { UserdetailsComponent } from './userdetails/userdetails.component';


@NgModule({
  declarations: [
    MyhomeComponent,
    NavComponent,
    UsersComponent,
    ChildComponent,
    DetailsComponent,
    FilterPipe,
    SubjectparentComponent,
    SubjectchildComponent,
    BehaviorparentComponent,
    BehaviorchildComponent,
    SubjectComponent,
    BehaveComponent
    
  ],
  imports: [
    CommonModule,
    MyhomeRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule,
    MatTableModule,
  ],
  exports:[
    MyhomeComponent
  ],
  providers:[
    WebServiceService
  ]
})
export class MyhomeModule { }
