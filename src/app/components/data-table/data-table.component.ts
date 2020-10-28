import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  @Input() title: string;
  @Input() data: any[];
  @Input() columns: {title:string, selector:string}[];

  constructor() { }


  ngOnInit(): void {
  }

}
