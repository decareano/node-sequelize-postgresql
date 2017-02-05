"use strict"

module.exports = function(sequelize, DataTypes) {

    var my_db = sequelize.define("lab_inventory", {
        
    	business_unit: {
		type: DataTypes.STRING,
		notEmpty: true
	},
	lab_name: {
		type: DataTypes.STRING,
	},
	location: {
		type: DataTypes.STRING,
	},
	validated: {
            type: DataTypes.BOOLEAN,
            

	},
	computer_name: {
            type: DataTypes.STRING,
            notNull: true
	
            
	},
	bmrn_asset: {
            type: DataTypes.STRING,
            
	},	
	pc_make_model: {
            type: DataTypes.STRING,
            
	},
	os: {
            type: DataTypes.STRING,
            
	},
	notes: {
            type: DataTypes.STRING,
            
	},
	system_owner: {
            type: DataTypes.STRING,
            
	},
	vendor: {
            type: DataTypes.STRING,
            
	},
	model_instrument_name: {
            type: DataTypes.STRING,
            
	},
	instrument_friendly_name: {
            type: DataTypes.STRING,
            
	},
	instrument_validation_id: {
            type: DataTypes.STRING,
            
	},
	instrument_software: {
            type: DataTypes.STRING,
            
	},
	backup_data_format: {
            type: DataTypes.STRING,
            
	},
	nic_address: {
            type: DataTypes.STRING,
            
	},
	ethernet_jack: {
            type: DataTypes.STRING,
            
	},
	ip_address_vlan: {
            type: DataTypes.STRING,
            
	},
	image: {
            type: DataTypes.STRING,
            
	},
	backup: {
            type: DataTypes.STRING,
            
	},
	decommisioned: {
            type: DataTypes.STRING,
            
	},
	last_verified: {
            type: DataTypes.STRING,
            
	},										
			
}, {
       tableName: 'lab_inventory'

    });

    return my_db;
}



