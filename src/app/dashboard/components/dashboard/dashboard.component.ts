import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
    name: string;
    position: number;
    weight: string;
    symbol: string;
    price: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
    {position: 1, name: 'Hydrogen', weight: "SALE", symbol: 'April 18, 2017', price:'$18'},
    {position: 2, name: 'Helium', weight: "EXTENDED", symbol: 'April 18, 2017', price:'$18'},
    {position: 3, name: 'Lithium', weight: "TAX", symbol: 'April 18, 2017', price:'$18'},
    {position: 4, name: 'Beryllium', weight: "SALE", symbol: 'April 18, 2017', price:'$18'},
    {position: 5, name: 'Boron', weight: "EXTENDED", symbol: 'April 18, 2017', price:'$18'},
    {position: 6, name: 'Carbon', weight: "TAX", symbol: 'April 18, 2017', price:'$18'}
  ];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})


export class DashboardComponent implements OnInit {
    blogImg = "https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80";
  constructor() { }
  
    displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'price'];
    dataSource = ELEMENT_DATA;
  
  ngOnInit() {
  }

}
