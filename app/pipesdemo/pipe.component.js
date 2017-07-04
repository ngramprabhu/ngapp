System.register(['@angular/core', '../customer.model'], function(exports_1, context_1) {
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
    var core_1, customer_model_1;
    var PipeDemoComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (customer_model_1_1) {
                customer_model_1 = customer_model_1_1;
            }],
        execute: function() {
            PipeDemoComponent = (function () {
                function PipeDemoComponent() {
                    this.curDate = new Date();
                    this.message = "The Pipe Demo";
                    this.cust = new customer_model_1.Customer(10, 'Ram', 'BTM', 'BLR', 'KA', 'IT');
                    this.income = 40000;
                }
                PipeDemoComponent.prototype.ngOnInit = function () { };
                PipeDemoComponent = __decorate([
                    core_1.Component({
                        selector: 'pipe-demo',
                        templateUrl: './app/pipesdemo/pipes.view.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], PipeDemoComponent);
                return PipeDemoComponent;
            }());
            exports_1("PipeDemoComponent", PipeDemoComponent);
        }
    }
});
