var express = require('express');
var router = express.Router();
var passport = require('passport');
var models = require("../models");
var db = require('../models');






/* GET users listing. */
router.get('/', function(req, res) {
  //console.log(users);
  res.render('index_login');

});

router.get('/login', function(req, res) {
	res.render('login_form_username');
  	//res.redirect('/' + req.user);
});

router.get('/home_page', function(req, res) {

	res.render('home_page');
});

// router.post('/login', (req, res) => passport.authenticate('local', 
// { successRedirect: '/', failureRedirect: '/login', })(req, res));  //there is an issue with passport


router.post('/authenticate', passport.authenticate('local', 
								{ successRedirect: '/home_page',
                                   failureRedirect: '/login',
                                   failureFlash: true })
);


router.get('/signup', function(req, res) {
  res.render("signup.ejs");
});


// router.get('/signin', function(req, res) {
//   res.render("signin.ejs");
// });

router.post('/signin', function(req, res){
  db.users.find({where: {username: req.username}}).then(function (user){
    if(!user) {
      db.users.create({username: req.body.username, password: req.body.password}).error(function(err){
        console.log(err);
      });
    } else {
      res.redirect('/signup')
    }
  })
  res.redirect('/')
});






// router.post('/users/login',
//   passport.authenticate('local'),
//   function(req, res) {
//     // If this function gets called, authentication was successful.
//     // `req.user` contains the authenticated user.
    
//     res.redirect('/users/' + req.user.username);
// });


// router.post('/loginOne', passport.authenticate('local' , { session: true }), function(req, res) {
//   //console.log(models);
//   // models.users
//   //       .build({

            	
// 		// username: req.body.username,
// 		// password: req.body.password
// 		// })

//   //       .save()
//         res.redirect('/users/' + req.user.username);
// });






module.exports = router;