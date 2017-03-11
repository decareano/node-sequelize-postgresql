"use strict"



module.exports = function(sequelize, DataTypes) {

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

