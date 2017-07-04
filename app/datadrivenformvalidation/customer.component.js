System.register(['@angular/core', './customer.model', '@angular/forms'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, customer_model_1, forms_1;
    var CustomerValidComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (customer_model_1_1) {
                customer_model_1 = customer_model_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            }],
        execute: function() {
            CustomerValidComponent = (function () {
                function CustomerValidComponent() {
                    this.message = 'The customer information system';
                    this.customer = new customer_model_1.Customer(0, 'Ram', 'BTM', 'Bangalore', 'Karnataka', 'IT');
                    this.customers = new Array();
                    this.occupations = ['Self-Employed', 'Employed', 'Not-employed'];
                    this.criterias = ['name', 'state', 'city'];
                    this.selcriteria = '';
                    this.criteria = '';
                    this.isSubmitted = false;
                    //Form related
                    this.form = new forms_1.FormGroup({
                        'custid': new forms_1.FormControl(this.customer.custid),
                        'custname': new forms_1.FormControl(this.customer.custname),
                        'address': new forms_1.FormControl(this.customer.address),
                        'city': new forms_1.FormControl(this.customer.city),
                        'state': new forms_1.FormControl(this.customer.state),
                        'occupation': new forms_1.FormControl(this.customer.occupation)
                    });
                }
                CustomerValidComponent.prototype.clear = function () {
                    this.customer = new customer_model_1.Customer(0, '', '', '', '', '');
                };
                CustomerValidComponent.prototype.save = function () {
                    this.customers.push(this.customer);
                    this.clear();
                    this.isSubmitted = true;
                };
                CustomerValidComponent.prototype.getSelectedCustomer = function (c) {
                    this.customer.custid = c.custid;
                    this.customer.custname = c.custname;
                    this.customer.address = c.address;
                    this.customer.city = c.city;
                    this.customer.state = c.state;
                    this.customer.occupation = c.occupation;
                };
                CustomerValidComponent.prototype.loadForm = function () {
                    this.clear();
                    this.isSubmitted = false;
                };
                CustomerValidComponent.prototype.ngOnInit = function () { };
                CustomerValidComponent = __decorate([
                    core_1.Component({
                        selector: 'cust-valid-data',
                        templateUrl: './app/datadrivenformvalidation/customer.validation.view.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], CustomerValidComponent);
                return CustomerValidComponent;
            }());
            exports_1("CustomerValidComponent", CustomerValidComponent);
        }
    }
});
