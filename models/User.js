"use strict"



module.exports = function(sequelize, DataTypes) {
	//console.log(Object.keys(DataTypes));
	//console.log(sequelize);
    var myUsers = sequelize.define("users", {

        
    	username: {
			type: DataTypes.STRING,
		
		},
		password: {
			type: DataTypes.STRING,

		},
}, {
	tableName: 'users'
	});
	return myUsers;
}

//var app = require('../app.js')