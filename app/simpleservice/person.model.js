System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Persons;
    return {
        setters:[],
        execute: function() {
            exports_1("Persons", Persons = [
                { PersonId: 101, PersonName: 'A' },
                { PersonId: 102, PersonName: 'B' },
                { PersonId: 103, PersonName: 'C' }
            ]);
        }
    }
});
