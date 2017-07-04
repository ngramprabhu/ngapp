System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var EmailValidator;
    return {
        setters:[],
        execute: function() {
            EmailValidator = (function () {
                function EmailValidator() {
                }
                EmailValidator.emailValidator = function (c) {
                    //Validate email address with only lowercase characters
                    var regExp = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
                    if (c.value.match(regExp)) {
                        return null;
                    }
                    else {
                        return { 'incorrectEmail': true };
                    }
                };
                return EmailValidator;
            }());
            exports_1("EmailValidator", EmailValidator);
        }
    }
});
