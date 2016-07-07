import { Email } from 'meteor/email';

Meteor.startup(function(){
	process.env.MAIL_URL = 'smtp://jaiswal.shailesh7%40gmail.com:*123shsonu*@smtp.gmail.com:465';
	//console.log(process.env);
});

Meteor.methods({
	sendemail : function(to,from,subject,text){
		
		//check([to,from,subject,text],[String]);
		//this.inblock();

		Email.send({
			to:to,
			from:from,
			subject:subject,
			text:text
		});
		console.log("Mail sent");
	}
});
