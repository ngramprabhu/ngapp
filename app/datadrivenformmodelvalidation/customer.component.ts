import { Component, OnInit } from '@angular/core';
import { Customer } from './customer.model';
import {FormGroup, FormControl, FormBuilder,Validators} from '@angular/forms';

@Component({
    selector: 'cust-model-valid-data',
    templateUrl: './app/datadrivenformmodelvalidation/customer.modelvalidation.view.html'
})
export class CustomerModelValidComponent implements OnInit {
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

    constructor() {
        this.message = 'The customer information system';
        this.customer = new Customer(0,'Ram','BTM','Bangalore','Karnataka','IT');
        this.customers = new Array<Customer>();
        this.occupations = ['Self-Employed','Employed','Not-employed']
        this.criterias = ['name','state','city'];
        this.selcriteria= '';
        this.criteria = '';
        this.isSubmitted = false;

        //Form related
        this.form = new FormGroup({
            'custid': new FormControl(this.customer.custid, Validators.compose([Validators.required, Validators.pattern('[0-9]+')])),
            'custname': new FormControl(this.customer.custname),
            'address': new FormControl(this.customer.address),
            'city': new FormControl(this.customer.city),
            'state': new FormControl(this.customer.state),
            'occupation': new FormControl(this.customer.occupation)
        });
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