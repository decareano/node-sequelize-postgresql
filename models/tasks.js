"use strict"

module.exports = function(sequelize, DataTypes) {
    var Tasks = sequelize.define("Tasks", {
        business_unit: {
            type: DataTypes.STRING,
            allowNull: true
        },
        lab_name: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }, {
       tableName: 'Tasks'
    });

    return Tasks;
}



