exports.render=function(req,res){

	if (req.session.lastVisit) {
    console.log(req.session.lastVisit);
  }
  req.session.lastVisit = new Date();

	res.render('index', {
		title: 'This is how the first template got rendered!!',
		userFullName: req.user ? req.user.fullName : ''
	});
};