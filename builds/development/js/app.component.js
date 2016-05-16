System.register(['angular2/core', 'angular2/common'], function(exports_1, context_1) {
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
    var core_1, common_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            // our first component
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent.prototype.ngOnInit = function () {
                    // initialize the form with some data plus validations
                    this.form = new common_1.ControlGroup({
                        'firstname': new common_1.Control('', common_1.Validators.compose([
                            common_1.Validators.required,
                            common_1.Validators.pattern('[\\w\\-\\s\\/]+'),
                            this.nameValidator
                        ])),
                        'email': new common_1.Control(''),
                        'subject': new common_1.Control('complain'),
                        'message': new common_1.Control('', this.messageValidator)
                    });
                };
                // lets add more validations to the name attribute
                AppComponent.prototype.nameValidator = function (control) {
                    // tell validator that everything is fine
                    if (control.value.trim() === 0)
                        return null;
                    // temporarily capture the firstname
                    var firstName = control.value;
                    // the firstname has to have more than 6 characters
                    if (firstName.length < 6)
                        return { 'firstname': true };
                };
                // lets add more validations to the message body attribute
                AppComponent.prototype.messageValidator = function (control) {
                    // tell validator that everything is fine
                    if (control.value.trim() === 0)
                        return null;
                    // temporarily save the captured message
                    var message = control.value;
                    // the user has to enter at least 10 characters for the message body
                    if (message.length < 10)
                        return { 'message': true };
                };
                AppComponent.prototype.onSubmit = function (form) {
                    // print out captured information
                    console.log(form);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'app',
                        templateUrl: '/partials/contact-form.component.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=app.component.js.map
