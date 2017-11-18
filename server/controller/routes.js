//require express
var express = require('express');
//require path
var path = require('path');
//router
var router = express.Router();
//patronus logic
var patronus_controller = require('./patronus_controller.js');
var patronus_object = require('../models/object.js');

router.get('/', function(req, res){
	//console.log(req)
	res.sendFile(path.join(__dirname, '../../client/html/index.html'));
})

router.post('/patronus', function(req,res){
	//console.log(req.body)
	var patronus_arr = [];
	for(var i = 0; i < patronus_object.length; i++){
		if(patronus_object[i].name === patronus_controller(req.body)){
			patronus_arr.push(patronus_object[i]);
		}
	}
	//data = patronus_controller.choose_patronus(req.body)
	res.json(patronus_arr)
});



module.exports = router;