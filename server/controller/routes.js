//require express
var express = require('express');
//require path
var path = require('path');
//router
var router = express.Router();
//requiring the data in the object i made
var data = require('../models/object.js');

router.get('/', function(req, res){
	console.log(req)
	res.sendFile(path.join(__dirname, '../../client/html/index.html'));
})

router.post('/patronus-post', function(req,res){
	console.log(data[i])
	res.json(data[i])
});



module.exports = router;