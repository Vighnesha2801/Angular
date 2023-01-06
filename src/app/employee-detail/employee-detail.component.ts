import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormControl,Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss'],
  // template: `<h1 id="head"></h1>
  // <p id="id">{{id}}</p><br>
  // <p id="userid">{{userid}}</p><br>
  // <p id="title">{{title}}</p><br>
  // <p id="body">{{body}}</p><br>`
})
export class EmployeeDetailComponent implements OnInit {
  displayedColumns: any[] = ['id','userId','title','body'];

  Form : any;
  hide = true;
  newdata:any;
  dataSource:any;
  Id:any;
  userId:any;
  title:any;
  body:any;
  r:any;

  ngOnInit(): void {
    
  }

  


  constructor(private router: Router,private formBuilder:FormBuilder,private _apiservice:ApiserviceService) { 
    this.Form = new FormGroup(
      {
        // email: new FormControl('',[Validators.required, Validators.email,]),
        // password: new FormControl('',[Validators.required, Validators.minLength(8)])
        Id: new FormControl('', [Validators.required,])
      }
    );
  }

  add(){
    const id=this.Form.controls['Id'].value;
    console.log(id);
    this._apiservice.getUser(id).subscribe((res)=>{
      this.newdata = res;
    })
  }


  onLogin(){
    const Id = Number(this.Form.controls['Id'].value);
    if(Id<1 || Id>100 || isNaN(Id)){
      alert("This Id does not exist!!")
      return;
    }
    
  }

  

}
