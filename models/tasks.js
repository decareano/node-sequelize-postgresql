"use strict"

module.exports = function(sequelize, DataTypes) {
    var my_db = sequelize.define("test_marcelo", {
        title: {
            type: DataTypes.STRING,
	},
        completed: {
            type: DataTypes.BOOLEAN,
            
	}
    }, {
       tableName: 'test_marcelo'
    });

    return my_db;
}



