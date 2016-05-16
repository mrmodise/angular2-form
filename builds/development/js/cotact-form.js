System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ContactForm;
    return {
        setters:[],
        execute: function() {
            ContactForm = (function () {
                function ContactForm(name, email, subject, message) {
                    this.name = name;
                    this.email = email;
                    this.subject = subject;
                    this.message = message;
                }
                return ContactForm;
            }());
            exports_1("ContactForm", ContactForm);
        }
    }
});

//# sourceMappingURL=cotact-form.js.map
