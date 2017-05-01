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
						//console.log(err);
					
					if (isMatch) {
						return done(null, user)
						//console.log(done);
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
	User.hook('beforeCreate', function(user, options, fn) {
		//console.log( 'before_create:', user, options );
		var salt = bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt){
			return salt
		});
		bcrypt.hash(user.password, salt, null, function(err, hash){
			//console.log(hash, 'marcelo');
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