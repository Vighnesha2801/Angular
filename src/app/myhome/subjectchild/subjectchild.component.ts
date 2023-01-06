import { Component, OnInit } from '@angular/core';
import { SubjectMessageService } from '../subject-message.service';
import { WebServiceService } from '../web-service.service';

@Component({
  selector: 'app-subjectchild',
  templateUrl: './subjectchild.component.html',
  styleUrls: ['./subjectchild.component.scss']
})
export class SubjectchildComponent implements OnInit {
  displayedColumns: any[] = ['id','userId','title','body','link'];
  dataSource:any;
  filteredString:any;

  constructor(private _apiservice:WebServiceService,private message:SubjectMessageService) {
    this._apiservice.getdata().subscribe((res)=>{
      this.dataSource= res;
      console.log(this.dataSource);
    });
   }

  ngOnInit(): void {

    this.message.receivedMessage().subscribe((value)=>{
      this.filteredString=value.filter;
      console.log(this.filteredString);
      this.message.receivedMessage().subscribe((res)=>{
        this.dataSource=res.datasource;
        console.log(this.dataSource)
      })
      
    });
    
  }

}
