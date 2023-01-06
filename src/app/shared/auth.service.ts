import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  IsLoggedIn(){
    const t = localStorage.getItem('token');
    if(t){
      return true;
    }
    else
    {
      return false;
    }
    //return !!localStorage.getItem('token');
  }


}
