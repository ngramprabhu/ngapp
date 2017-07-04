import { Component, OnInit } from '@angular/core';
import {Customer} from '../customer.model';

@Component({
    selector: 'pipe-demo',
    templateUrl: './app/pipesdemo/pipes.view.html'
})
export class PipeDemoComponent implements OnInit {
    curDate:Date;
    message:string;
    cust:Customer;
    income:number;
    constructor() {
        this.curDate = new Date();
        this.message = "The Pipe Demo";
        this.cust = new Customer(10,'Ram','BTM','BLR','KA','IT');
        this.income = 40000;
    }

    ngOnInit() { }
}