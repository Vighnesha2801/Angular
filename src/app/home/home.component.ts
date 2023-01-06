import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from '../shared/auth.guard';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  selectedRoute: string = '';
  constructor(private activaedRoute: Router) { 
    this.selectedRoute = 'employees';
  }

  ngOnInit(): void {

  }

  route(route:string) {
    this.selectedRoute = route;
  }

  remove(){
    this.activaedRoute.navigate(['/']);
    localStorage.removeItem('token');
  }



}
