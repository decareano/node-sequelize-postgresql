var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var routes = require('./routes/index');
var users = require('./routes/users');
var app = express();

//var Model = require('../model/models.js');

var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;
    passport.use(new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password'
    },
    (username, password, done) => {
        //log.debug("Login process:", username);
        return User.one("SELECT  username, password, id " +
            "FROM users " +
            "WHERE username=$1 AND password=$2", [username, password])
        .then((result)=> {
            return done(null, result);
        })
        .catch((err) => {
            log.error("/login: " + err);
            return done(null, false, {message:'Wrong user name or password'});
        });
    }));

passport.serializeUser((user, done)=>{
    //log.debug("serialize ", user);
    done(null, user.user_id);
});

passport.deserializeUser((id, done)=>{
    //log.debug("deserialize ", id);
    User.one("SELECT username, password, id FROM users " +
            "WHERE id = $1", [id])
    .then((user)=>{
      //log.debug("deserializeUser ", user);
      done(null, user);
    })
    .catch((err)=>{
      done(new Error(`User with the id ${id} does not exist`));
    })
});

// passport.use(new LocalStrategy(
//   function(username, password, done) {
    
//     myusers.find({username: username}, function (err, user) {
//         //console.log(users);
//       if (err) { return done(err); }
//       if (!user) {
//         return done(null, false, { message: 'Incorrect username.' });
//       }
//       if (!user.validPassword(password)) {
//         return done(null, false, { message: 'Incorrect password.' });
//       }
//       return done(null, user);
//     });
//   }
// ));

// passport.serializeUser(function(user, done) {
//   done(null, user.id);
// });

// passport.deserializeUser(function(id, done) {
  
// });





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
app.use('/users', users);
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

