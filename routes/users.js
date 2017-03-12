var express = require('express');
var router = express.Router();
var passport = require('passport');


/* GET users listing. */
router.get('/', function(req, res) {
  res.render('index_login');

});

router.get('/login', function(req, res) {
	res.render('login_form_username');

});



// router.post('/users/login',
//   passport.authenticate('local'),
//   function(req, res) {
//     // If this function gets called, authentication was successful.
//     // `req.user` contains the authenticated user.
    
//     res.redirect('/users/' + req.user.username);
// });


router.post('/login1', passport.authenticate('local' , { session: true }), function(req, res) {
  console.log(models);
  models.users
        .build({

            	
		username: req.body.username,
		password: req.body.password
		})

        .save()
        res.redirect('/users/' + req.user.username);
});






module.exports = router;