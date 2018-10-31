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
	//res.cookie("session.id", "", { expires: new Date() });
	res.redirect("/");

}


//res.setCookie in destroySession before the redirect....delete a cookie and express how to delete 
//a cookie....