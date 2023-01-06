import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, filter, fromEvent, Observable, Subscription, tap } from 'rxjs';
import { BehaviorMessageService } from '../behavior-message.service';
import { interval } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-behaviorparent',
  templateUrl: './behaviorparent.component.html',
  styleUrls: ['./behaviorparent.component.scss']
})
export class BehaviorparentComponent implements OnInit {

  filteredString:any;
  dataSource:any;
  Form=new FormControl('');
  obs:any;
  @ViewChild('input')
  input!: ElementRef;


  constructor(private message:BehaviorMessageService) { 
   
  }

  ngOnInit(): void {
    // this.Form.setValue("Enter text"); //solution 1
    this.message.sendMessage("");
  }

  ngAfterViewInit() {
    // server-side search
    fromEvent(this.input.nativeElement,'keyup')
    .pipe(debounceTime(1000))
    .subscribe(data => {
      console.log(this.input.nativeElement.value);
      this.message.sendMessage(this.input.nativeElement.value)});
}

  // setVar(event:any){
  //   this.filteredString=event.target.value;
  //   // this.obs=this.Form.valueChanges.pipe(debounceTime(500)).subscribe(data => console.log(data));
  //   this.Form.valueChanges.pipe(debounceTime(1000)).subscribe(data => this.message.sendMessage(data));
  //   // this.message.sendMessage(this.filteredString)
    
  // }

}
