import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SubjectMessageService } from '../subject-message.service';
import { WebServiceService } from '../web-service.service';

@Component({
  selector: 'app-subjectparent',
  templateUrl: './subjectparent.component.html',
  styleUrls: ['./subjectparent.component.scss']
})
export class SubjectparentComponent implements OnInit, OnDestroy {

  filteredString:any;
  dataSource:any;
  $sub: Subscription = new Subscription;

  constructor(private webService:WebServiceService,private message:SubjectMessageService) {
   
   }
  ngOnDestroy(): void {
    this.$sub.unsubscribe();
  }

  ngOnInit(): void {
    // this.filteredString='';
    
    // this.webService.getfilter(this.filteredString).subscribe((res)=>{
      
    //   this.dataSource= res;
    //   console.log(this.dataSource);
    // });

    // this.message.sendMessage(this.filteredString,this.dataSource);
  }

  setVar(event:any){
    this.filteredString=event.target.value;
    
    this.webService.getfilter(this.filteredString).subscribe((res)=>{
      
      this.dataSource= res;
      console.log(this.dataSource);
    });
    
    this.message.sendMessage(this.filteredString,this.dataSource);
  }


}
