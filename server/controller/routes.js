//require express
var express = require('express');
//require path
var path = require('path');
//router
var router = express.Router();
//requiring the data in the object i made
var data = require('../models/object.js');

router.get(function(req, res){
	res.sendFile(path.join(__dirname, '../../client/html/main.html'));
})

router.post('/patronus-post', function(req,res){
	console.log(req.body);

// router.get('/patronus/:name',function(req, res){
// 	res.send(req.params.name)
// 	var patronus = [];
// 	for (var i = 0; i < data.length; i++ ){
// 		if(data[i].name === req.params.name){
// 			patronus.push(data[i])
// 		}
// 	}
// 	res.json(patronus);

// 	if (patronus.length > 0 ){
// 		res.set('Content-Type', 'text/html');
// 		res.send(html_creator(patronus[0]));
		
// 	} else {
// 		res.status (404).send("Page not found");
// 	}
});


module.exports = router;