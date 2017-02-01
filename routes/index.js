var express = require('express');
var router = express.Router();

var models = require("../models");

/* GET home page. */
router.get('/', function(req, res) {
  models.test_marcelo.all().then(function(taskList) {
    res.render('index', {tasks: taskList});
  });
});


router.post('/add-task', function(req, res) {
  models.test_marcelo
        .build({

            title: req.body.title,
            completed: false})

           
        .save()
        .then(function() {
          models.test_marcelo.findAll({}).then(function(taskList) {
                res.render('index', {tasks: taskList});
            });
        });
});

module.exports = router;
