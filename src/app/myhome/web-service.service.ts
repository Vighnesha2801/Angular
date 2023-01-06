import { HttpClient, HttpParams } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { debounceTime } from 'rxjs';
// import { debounceTime } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebServiceService {
  [x: string]: any;
  search: any;

  constructor(private http:HttpClient) { 
    // this.search = debounceTime(100);
  }

  getdata(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  getfilter(filteredString:string){
    let obj=new HttpParams();
    obj= obj.append('q',filteredString);
    // obj=obj.append('r',this.search);

    // return this.http.get(`https://jsonplaceholder.typicode.com/posts?q=${filteredString}`);
    return this.http.get('https://jsonplaceholder.typicode.com/posts', {
      params: obj
    });
  }

  getUser(id:any){
    return this.http.get('https://jsonplaceholder.typicode.com/posts/'+id);
  }
}
