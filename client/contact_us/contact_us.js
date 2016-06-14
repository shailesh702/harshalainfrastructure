
export const contact = new Mongo.Collection('contact');

Template.contact_us_page.events({
	"submit .contact":function (event) {
		event.preventDefault();
		var name = event.target.name.value;
		var email = event.target.email.value;
		var contact_name = event.target.contact_name.value;
		var contact_number = event.target.contact_number.value;
		var comment = event.target.comments.value;
		Meteor.call("contact",name,email,contact_name,contact_number);
	}
});