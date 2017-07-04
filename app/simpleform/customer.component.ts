import { Component, OnInit } from '@angular/core';
import { Customer } from './customer.model';

@Component({
    selector: 'cust-simple-form-data',
    templateUrl: './app/simpleform/customer.simpleform.view.html'
})
export class CustomerSimpleFormComponent implements OnInit {
    customer:Customer;
    customers:Array<Customer>;
    message:string;
    occupations:Array<string>; // or string[] or [],
    criterias:string[];
    selcriteria:string;
    criteria:string;
    isSubmitted:boolean;
    constructor() {
        this.message = 'The customer information system';
        this.customer = new Customer(0,'Ram','BTM','Bangalore','Karnataka','IT');
        this.customers = new Array<Customer>();
        this.occupations = ['Self-Employed','Employed','Not-employed']
        this.criterias = ['name','state','city'];
        this.selcriteria= '';
        this.criteria = '';
        this.isSubmitted = false;
    }
    clear() {
        this.customer = new Customer(0,'','','','','');
    }
    save() {
        this.customers.push(this.customer);
        this.clear();
        this.isSubmitted = true;
    }

    getSelectedCustomer(c) {
        this.customer.custid = c.custid;
        this.customer.custname = c.custname;
        this.customer.address = c.address;
        this.customer.city = c.city;
        this.customer.state = c.state;
        this.customer.occupation = c.occupation;
    }
    loadForm(){
        this.clear();
        this.isSubmitted = false;
    }

    ngOnInit() { }
}