import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiserviceService } from 'src/app/apiservice.service';
import { WebServiceService } from '../web-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers:[WebServiceService]
})
export class UsersComponent implements OnInit {
  displayedColumns: any[] = ['id','userId','title','body','link'];
  
  title = "EmployeeDetails";
  newdata:any;
  dataSource:any;
  j:any;
  currentItem:any;
  filteredString:any='';
  Form:any;

  constructor(private _apiservice:WebServiceService) { 
    this.Form=new FormGroup({
      fill : new FormControl('')
    });
    this._apiservice.getdata().subscribe((res)=>{
      this.newdata = res;
      console.log(this.newdata);
      // this.dataSource = new MatTableDataSource(this.newdata);
      this.dataSource= res;
      console.log(this.dataSource);
    });
  }

  ngOnInit(): void {
  }

  setVar($event:any){
    this.filteredString=$event.target.value;
    // console.log(this.filteredString);
  }

  applyFilter(filterValue: any) {
    // this.filterValue = 
    // this.dataSource.filter = filterValue.target.value.trim().toLowerCase();
  }

  getdetails(){
    
  }


}
