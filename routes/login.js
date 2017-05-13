exports.IsAuthenticated = function(req, res, next){
	console.log("authenticate user");
	if(req.isAuthenticated()){
		next();
	} else {
		next(new Error(401));
	}
}

exports.destroySession = function(req, res, next) {
	console.log("logout success!");
	req.logOut();
	req.session.destroy();
	res.redirect("/");

}