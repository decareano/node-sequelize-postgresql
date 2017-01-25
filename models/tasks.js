"use strict"

module.exports = function(sequelize, DataTypes) {
    var Tasks = sequelize.define("Tasks", {
        business_unit: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lab_name: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
       tableName: 'Tasks'
    });

    return Tasks;
}



