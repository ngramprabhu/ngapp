System.register(['@angular/core', '@angular/platform-browser', '@angular/platform-browser-dynamic', '@angular/forms', './simple.component', './customer.component', './simpleform/customer.component', './datadrivenformvalidation/customer.component', './datadrivenformmodelvalidation/customer.component', './customerassignment/customer.component', './simpleservice/person.service', './simpleservice/person.component', './pipesdemo/pipe.component'], function(exports_1, context_1) {
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
    var core_1, platform_browser_1, platform_browser_dynamic_1, forms_1, simple_component_1, customer_component_1, customer_component_2, customer_component_3, customer_component_4, customer_component_5, person_service_1, person_component_1, pipe_component_1;
    var AppModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (simple_component_1_1) {
                simple_component_1 = simple_component_1_1;
            },
            function (customer_component_1_1) {
                customer_component_1 = customer_component_1_1;
            },
            function (customer_component_2_1) {
                customer_component_2 = customer_component_2_1;
            },
            function (customer_component_3_1) {
                customer_component_3 = customer_component_3_1;
            },
            function (customer_component_4_1) {
                customer_component_4 = customer_component_4_1;
            },
            function (customer_component_5_1) {
                customer_component_5 = customer_component_5_1;
            },
            function (person_service_1_1) {
                person_service_1 = person_service_1_1;
            },
            function (person_component_1_1) {
                person_component_1 = person_component_1_1;
            },
            function (pipe_component_1_1) {
                pipe_component_1 = pipe_component_1_1;
            }],
        execute: function() {
            AppModule = (function () {
                function AppModule() {
                }
                AppModule = __decorate([
                    core_1.NgModule({
                        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, forms_1.ReactiveFormsModule],
                        declarations: [simple_component_1.SimpleComponent, customer_component_1.CustomerComponent, customer_component_2.CustomerSimpleFormComponent,
                            customer_component_3.CustomerValidComponent, customer_component_4.CustomerModelValidComponent, customer_component_5.CustomerAssignmentComponent,
                            person_component_1.PersonServiceComponent,
                            pipe_component_1.PipeDemoComponent
                        ],
                        providers: [person_service_1.PersonService],
                        bootstrap: [pipe_component_1.PipeDemoComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppModule);
                return AppModule;
            }());
            exports_1("AppModule", AppModule);
            platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule);
        }
    }
});
