var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var routes = require('./routes/users');
//var routes = require('./routes/index');
var http = require('http');
var users = require('./routes/users');
var app = express();
//var app = require('./app');
var db = require('./models');
//var myUsers = require('./User.js');
var Sequelize = require('sequelize');
//Sequelize.prototype.authenticate = function() 
var login = require('./routes/login');
//var authenticate = require('./routes/authenticate')

SALT_WORK_FACTOR = 12;

db
  .sequelize
  .authenticate()
  //.sync()
  // .complete(function(err){
    // .sequelize
    // .prototype
  // .then(function(err) {
  //   console.log(err);
// 
  // if (err) {
  //   throw err[0]
  // } else {
    db.users.find({where: {username: 'toto'}}).then(function (user){
      if (!user) {
        db.users.build({username: 'admin', password: 'admin'}).save();
      };
    });
    
    http.createServer(app).listen(3000, function(){
      console.log('Express is listening on port ' + this.address().port);
    });
  
 // })

var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy
  , db = require('./models')
  
passport.use(new LocalStrategy(
  function(username, password, done) {
    console.log("before:",  db.user);
    //console.log("userskeys", Object.keys(myusers));
    db.users.find({where: {username: username}}).then(function (err, user) {
      passwd = user ? user.password : ''
      isMatch = db.users.validPassword(password, passwd, done, user)

        console.log("b4 myusers.findAll:", user);
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});





// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/login', routes);
//app.use('/authenticate', routes);
app.use(passport.initialize());
app.use(passport.session());





// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
//module.exports.User = User;

