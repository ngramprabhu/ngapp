System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Customer;
    return {
        setters:[],
        execute: function() {
            Customer = (function () {
                function Customer(custid, custname, address, city, state, occupation, email, income, tax) {
                    this.custid = custid;
                    this.custname = custname;
                    this.address = address;
                    this.city = city;
                    this.state = state;
                    this.occupation = occupation;
                    this.email = email;
                    this.income = income;
                    this.tax = tax;
                }
                return Customer;
            }());
            exports_1("Customer", Customer);
        }
    }
});
