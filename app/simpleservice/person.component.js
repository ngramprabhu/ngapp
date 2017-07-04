System.register(['@angular/core', './person.service'], function(exports_1, context_1) {
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
    var core_1, person_service_1;
    var PersonServiceComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (person_service_1_1) {
                person_service_1 = person_service_1_1;
            }],
        execute: function() {
            PersonServiceComponent = (function () {
                function PersonServiceComponent(serv) {
                    this.serv = serv;
                }
                PersonServiceComponent.prototype.ngOnInit = function () { };
                PersonServiceComponent.prototype.getPersonsLength = function () {
                    var length = this.serv.getPerson().length;
                    alert("Length of Person Data" + length);
                };
                PersonServiceComponent = __decorate([
                    core_1.Component({
                        selector: 'person-service',
                        template: "<div><button (click)='getPersonsLength()'>Get Length</button>"
                    }), 
                    __metadata('design:paramtypes', [person_service_1.PersonService])
                ], PersonServiceComponent);
                return PersonServiceComponent;
            }());
            exports_1("PersonServiceComponent", PersonServiceComponent);
        }
    }
});
