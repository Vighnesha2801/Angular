import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiserviceService } from 'src/app/apiservice.service';
import { WebServiceService } from '../web-service.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  displayedColumns: any[] = ['id','userId','title','body'];
  newdata: any;
  id: any;

  constructor(private router: Router,private _apiservice:WebServiceService,private activeRoute:ActivatedRoute) { 
    
  }

  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.params['id'];

    this._apiservice.getUser(this.id).subscribe((res)=>{
      this.newdata = res;
    })
  }

  

}
