import { Component, OnInit } from '@angular/core';
import { Customer } from './customer.model';

@Component({
    selector: 'cust-data',
    templateUrl: './app/customer.view.html'
})
export class CustomerComponent implements OnInit {
    customer:Customer;
    customers:Array<Customer>;
    message:string;
    occupations:Array<string>; // or string[] or []
    constructor() {
        this.message = 'The customer information system';
        this.customer = new Customer(0,'Ram','BTM','Bangalore','Karnataka','IT');
        this.customers = new Array<Customer>();
        this.occupations = ['Self-Employed','Employed','Not-employed'];
    }
    clear() {
        this.customer = new Customer(0,'','','','','');
    }
    save() {
        this.customers.push(this.customer);
        this.clear();
        alert(JSON.stringify(this.customers));
    }

    getSelectedCustomer(c) {
        this.customer.custid = c.custid;
        this.customer.custname = c.custname;
        this.customer.address = c.address;
        this.customer.city = c.city;
        this.customer.state = c.state;
        this.customer.occupation = c.occupation;
    }

    ngOnInit() { }
}