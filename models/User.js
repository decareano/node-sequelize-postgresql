"use strict"



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
}, {
	tableName: 'users'
	});
	return User;
}

//var app = require('../app.js')