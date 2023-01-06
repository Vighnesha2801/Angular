import { Injectable } from '@angular/core';
import { BehaviorSubject, debounceTime, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BehaviorMessageService {
  private behave = new BehaviorSubject<string>('');

  constructor() {
   }

  sendMessage(filteredString:string){
    
    this.behave.next(filteredString);
    // console.log(filteredString);
  }

  receivedMessage():Observable<string>{
    return this.behave.asObservable();
  }
}
