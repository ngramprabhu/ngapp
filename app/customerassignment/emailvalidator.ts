export class EmailValidator {
    static emailValidator(c) {
        //Validate email address with only lowercase characters
        var regExp = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
        if (c.value.match(regExp)) {
            return null;
        } else {
            return { 'incorrectEmail': true };
        }
    }
}