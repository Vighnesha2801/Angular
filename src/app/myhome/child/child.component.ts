import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  displayedColumns: any[] = ['id','userId','title','body','link'];

  @Input() dataSource:any;
  @Input() filteredString:any;
  constructor() { }

  ngOnInit(): void {
  }

}
