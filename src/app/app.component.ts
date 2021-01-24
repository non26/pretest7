import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  private gridApi;
  private gridColumnApi;

  columnDefs = [
    { field: 'data', sortable: true, filter: true },
  ];

  rowData: any;

  constructor(private http: HttpClient) {
    }

  ngOnInit() {
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.http.get<Array<string>>('https://api.publicapis.org/categories').subscribe((data) => {
      this.rowData = data.map(e=>{return {"data":e}});
    });;
  }
}
