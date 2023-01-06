import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiserviceService } from '../apiservice.service';




@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
  providers:[ApiserviceService]
})




export class EmployeesComponent implements OnInit {
  displayedColumns: any[] = ['id','userId','title','body','link'];
  
  title = "EmployeeDetails";
  newdata:any;
  dataSource:any;
  j:any;
  filteredString:any;
  
  constructor(private _apiservice:ApiserviceService) { }

  ngOnInit(): void {
    this._apiservice.getdata().subscribe((res)=>{
      this.newdata = res;
      console.log(this.newdata);
      // this.dataSource = new MatTableDataSource(this.newdata);
      this.dataSource= res;
    })
  }

  applyFilter(filterValue: any) {
    this.filteredString=filterValue.target.value;
    //const filterValue = (event.target as HTMLInputElement).value;
    // this.dataSource.filter = filterValue.target.value.trim().toLowerCase();

    

  }

  getdetails(){
    
  }

}

