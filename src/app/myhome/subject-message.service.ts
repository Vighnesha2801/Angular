import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectMessageService {
  private subject = new Subject<any>();
  private data = new Subject<string>();

  constructor() { }

  sendMessage(filteredString:any,data:any){
    this.subject.next({filter:filteredString,datasource:data});
    // this.data.next(data);
    // console.log(filteredString);
  }

  // sendMessage(obs:any){
  //   this.subject.next(obs);
  // }

  receivedMessage():Observable<any>{
    return this.subject.asObservable();
  }

  // receivedData():Observable<string>{
  //   return this.data.asObservable();
  // }
}
