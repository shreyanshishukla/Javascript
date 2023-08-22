var EmailValidator = /** @class */ (function () {
    function EmailValidator() {
    }
    EmailValidator.prototype.isValid = function (value) {
        console.log("validating email");
    };
    EmailValidator.prototype.message = function (msg) {
        return msg;
    };
    return EmailValidator;
}());
