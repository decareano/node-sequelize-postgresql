"use strict"
var bcrypt = require('bcrypt-nodejs')




module.exports = function(sequelize, DataTypes) {
	//console.log(Object.keys(DataTypes));
	//console.log(sequelize);
    var User = sequelize.define("users", {

        
    	username: {
			type: DataTypes.STRING,
		
		},
		password: {
			type: DataTypes.STRING,

		},
	},
	{
		classMethods: {
			validPassword: function(password, passwd, done, user){
				bcrypt.compare(password, passwd, function(err, isMatch){
					if (err) console.log(err)
					if (isMatch) {
						return done(null, user)
					} else {
						return done(null, false)
					}
				})
			}
		}
	},
	{
		dialect: 'postgres'
	}
	);
	User.hook('beforeCreate', function(user, fn){
		console.log( 'fn is:', typeof fn, fn );
	var salt = bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt){
		return salt
	});
	bcrypt.hash(user.password, salt, null, function(err, hash){
		if(err) return next(err);
		user.password = hash;
		return fn(null, user)
	});
	})
	{
		tableName: 'users'
	};
	return User;
}

//var app = require('../app.js')