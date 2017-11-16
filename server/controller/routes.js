//require express
var express = require('express');
//require path
var path = require('path');
//router
var router = express.Router();
//patronus logic
var patronus_controller = require('./patronus_controller.js')


router.get('/', function(req, res){
	//console.log(req)
	res.sendFile(path.join(__dirname, '../../client/html/index.html'));
})

router.post('/patronus', function(req,res){
	console.log(req.body)
	//data = patronus_controller.choose_patronus(req.body)
	res.json(patronus_controller)
});



module.exports = router;