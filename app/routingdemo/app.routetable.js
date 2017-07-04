System.register(['@angular/router', './homecomponent', './aboutcomponent', './contactcomponent'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, homecomponent_1, aboutcomponent_1, contactcomponent_1;
    var appRoutes, routing;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (homecomponent_1_1) {
                homecomponent_1 = homecomponent_1_1;
            },
            function (aboutcomponent_1_1) {
                aboutcomponent_1 = aboutcomponent_1_1;
            },
            function (contactcomponent_1_1) {
                contactcomponent_1 = contactcomponent_1_1;
            }],
        execute: function() {
            //4. Define the route table using Routes Array
            appRoutes = [
                { path: "", component: homecomponent_1.HomeComponent },
                { path: "about", component: aboutcomponent_1.AboutComponent },
                { path: "contact", component: contactcomponent_1.ContactComponent }
            ];
            //5. Define the ModuleWithProvides to register
            //the RouterModule with RouteTable on root
            exports_1("routing", routing = router_1.RouterModule.forRoot(appRoutes));
        }
    }
});
