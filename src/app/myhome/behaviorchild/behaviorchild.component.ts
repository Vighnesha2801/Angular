import { Component, OnInit } from '@angular/core';
import { debounceTime } from 'rxjs';
import { BehaviorMessageService } from '../behavior-message.service';
import { WebServiceService } from '../web-service.service';


@Component({
  selector: 'app-behaviorchild',
  templateUrl: './behaviorchild.component.html',
  styleUrls: ['./behaviorchild.component.scss']
})
export class BehaviorchildComponent implements OnInit {
  displayedColumns: any[] = ['id','userId','title','body','link'];
  dataSource:any;
  filteredString:string='';

  constructor(private _apiservice:WebServiceService,private message:BehaviorMessageService) {
  
    
   }

  ngOnInit(): void {
    this.message.receivedMessage().subscribe((res)=>{
      this.filteredString=res
      // console.log(this.filteredString);
     
      this._apiservice.getfilter(this.filteredString).subscribe((res)=>{
      
        this.dataSource= res;
        // console.log(this.dataSource);
      });
    });
  }

}
