Router.configure({
	layoutTemplate:'mainPage'
	/*yieldTemplates: {
		'Footer': { to: 'footer'}
	}*/
});
Router.route('/',function(){
	this.render('home');
	this.layout('mainSide');
});

Router.route('/about_us',function(){
	//name: 'about_us';
	//template : 'about_us';
	this.render('about_us');
	this.layout('mainSide');
});
Router.route('/safety',function () {
	this.render('safety');
	this.layout('mainSide');
});
Router.route('/upcoming_events',function () {
	this.render('upcoming_events');
	this.layout('mainSide');
});
Router.route('/clientPage',function(){
	this.render('clientPage');
	this.layout('mainSide');
});
Router.route('/investor',function(){
	this.render('investor');
	this.layout('mainSide');
});
Router.route('/careerPage',function(){
	this.render('careerPage');
	this.layout('mainSide');
});
/*Router.route('/second',function(){
	this.render('secondPage');
	this.layout('mainSide');
	//this.layout('mainSide');
});*/
Router.route('/contact',function(){
	this.render('contact_us_page');
	this.layout('mainSide');
});
Router.route('/mep',function(){
	this.render('mep');
	this.layout('mainSide');
});
Router.route('/working_area',function(){
	this.render('working_area');
	this.layout('mainSide');
});