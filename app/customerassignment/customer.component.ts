import { Component, OnInit } from '@angular/core';
import { Customer } from './customer.model';
import {FormGroup, FormControl, FormBuilder,Validators} from '@angular/forms';
import {EmailValidator} from './emailvalidator';

@Component({
    selector: 'cust-assignment-data',
    templateUrl: './app/customerassignment/customer.assignment.view.html'
})
export class CustomerAssignmentComponent implements OnInit {
    customer:Customer;
    customers:Array<Customer>;
    message:string;
    occupations:Array<string>; // or string[] or [],
    criterias:string[];
    selcriteria:string;
    criteria:string;
    isSubmitted:boolean;

    //Forms related
    form:FormGroup;
    custid:FormControl;
    custname:FormControl;
    address:FormControl;
    city:FormControl;
    state:FormControl;
    occupation:FormControl;
    email:FormControl;
    income:FormControl;
    tax:FormControl;

    constructor() {
        this.message = 'The customer information system';
        this.customer = new Customer(0,'Ram','BTM','Bangalore','Karnataka','IT','ng@ng.com',10000,100);
        this.customers = new Array<Customer>();
        this.occupations = ['Self-Employed','Employed','Not-employed']
        this.criterias = ['name','state','city'];
        this.selcriteria= '';
        this.criteria = '';
        this.isSubmitted = false;

        //Form related
        this.form = new FormGroup({
            'custid': new FormControl(this.customer.custid, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(5)])),
            'custname': new FormControl(this.customer.custname, Validators.compose([Validators.pattern('[A-Za-z]+'), Validators.minLength(2), Validators.maxLength(50)])),
            'address': new FormControl(this.customer.address, Validators.compose([Validators.pattern('[A-Za-z]+')])),
            'city': new FormControl(this.customer.city, Validators.compose([Validators.pattern('[A-Za-z]+')])),
            'state': new FormControl(this.customer.state, Validators.compose([Validators.pattern('[A-Za-z]+')])),
            'occupation': new FormControl(this.customer.occupation),
            'email': new FormControl(this.customer.email, Validators.compose([EmailValidator.emailValidator])),
            'income': new FormControl(this.customer.income),
            'tax': new FormControl(this.customer.tax),
        });
    }
    clear() {
        this.customer = new Customer(0,'','','','','','',0,0);
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
        this.customer.email = c.email;
        this.customer.income = c.income;
        this.customer.tax = c.tax;
    }
    loadForm(){
        this.clear();
        this.isSubmitted = false;
    }

    ngOnInit() { }
}