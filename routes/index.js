var express = require('express');
var router = express.Router();

var models = require("../models");

/* GET home page. */
router.get('/', function(req, res) {
  models.lab_inventory.all().then(function(taskList) {
    res.render('index', {tasks: taskList});
  });
});


router.post('/add-task', function(req, res) {
  models.lab_inventory
        .build({

            	
		business_unit: req.body.business_unit,
		lab_name: req.body.lab_name,
		location: req.body.location,
		validated: req.body.validated,
		computer_name: req.body.computer_name,
		bmrn_asset: req.body.bmrn_asset,
		pc_make_model: req.body.pc_make_model,
		os: req.body.os,
		notes: req.body.notes,
		system_owner: req.body.system_owner,
		vendor: req.body.vendor,
		model_instrument_name: req.body.model_instrument_name,
		instrument_friendly_name: req.body.instrument_friendly_name,
		instrument_validation_id: req.body.instrument_validation_id,
		instrument_software: req.body.instrument_software,
		backup_data_format: req.body.backup_data_format,
		nic_address: req.body.nic_address,
		ethernet_jack: req.body.ethernet_jack,
		ip_address_vlan: req.body.ip_address_vlan,
		image: req.body.image,
		backup: req.body.backup,
		decommisioned: req.body.decommisioned,
		last_verified: req.body.last_verified
		})

        .save()
        .then(function() {
          models.lab_inventory.findAll({}).then(function(taskList) {
                res.render('index', {tasks: taskList});
            });
        });
});

module.exports = router;
