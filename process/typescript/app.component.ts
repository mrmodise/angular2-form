// needed for the component decorator 
import {Component} from 'angular2/core';

// needed for the form
import {ControlGroup, Control, Validators} from 'angular2/common';

// our first component
@Component({
	selector: 'app',
	templateUrl: '/partials/contact-form.component.html'
})

// to bootstrap the application
export class AppComponent{

	form;

	ngOnInit(){
		// initialize the form with some data plus validations
		this.form = new ControlGroup({
			'firstname': new Control('', Validators.compose([
				Validators.required,
				Validators.pattern('[\\w\\-\\s\\/]+'),
				this.nameValidator
				])),
			'email': new Control(''),
			'subject': new Control('complain'),
			'message': new Control('', this.messageValidator)
		});
	}

	// lets add more validations to the name attribute
	nameValidator(control){
		// tell validator that everything is fine
		if (control.value.trim() === 0) return null;

		// temporarily capture the firstname
		var firstName = control.value;

		// the firstname has to have more than 6 characters
		if (firstName.length < 6) return { 'firstname': true };

	}

	// lets add more validations to the message body attribute
	messageValidator(control){
		// tell validator that everything is fine
		if (control.value.trim() === 0) return null;

		// temporarily save the captured message
		var message = control.value;

		// the user has to enter at least 10 characters for the message body
		if (message.length < 10) return { 'message': true };
	}
	onSubmit(form){
		// print out captured information
		console.log(form);
	}
}