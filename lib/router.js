FlowRouter.route('/' , {
	name: 'homepage',
	action: function(params, queryparams) {
		BlazeLayout.render("homepage");
	}
});

