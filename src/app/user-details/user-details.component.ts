import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  displayedColumns: any[] = ['id','userId','title','body'];
  newdata: any;
  id: any;

  constructor(private router: Router,private _apiservice:ApiserviceService,private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.params['id'];

    this._apiservice.getUser(this.id).subscribe((res)=>{
      this.newdata = res;
    })
  }

}
