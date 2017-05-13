var express = require('express');
var router = express.Router();
var passport = require('passport');
var models = require("../models");
var db = require('../models');
var login = require('./login');


router.get('/', function(req, res) {
  //console.log(users);
  res.render('index_login');

});

router.get('/login', function(req, res) {
  console.log("router_login");
	res.render('login_form_username');
  //pseudo code below
  // if (user not in database) 
  //   go to signup router
  // else
  //   proceed to  home_page below
  	//res.redirect('/' + req.user);
});

router.get('/home_page', login.IsAuthenticated, function(req, res) {
  console.log("router_homePage");
	res.render('home_page');
});

router.post('/authenticate', passport.authenticate('local', 
								{ successRedirect: '/home_page',
                                   failureRedirect: '/signup',
                                   failureFlash: true })
);

router.get('/signup', function(req, res) {
  res.render("signup.ejs");
});

router.post('/signin', function(req, res){
  db.users.find({where: {username: req.username}}).then(function (user){
    if(!user) {
      db.users.create({username: req.body.username, password: req.body.password}).error(function(err){
        //console.log(err);
      });
    } else {
      res.redirect('/signup')
    }
  })
  res.redirect('/login')
});

module.exports = router;