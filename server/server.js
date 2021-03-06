var express = require('express');

var routes = require('./controller/routes.js');


var app = express();

var bodyParser = require('body-parser');

var object = require('./models/object.js');
//var patronusArray =[];
app.use(bodyParser.json());

app.use('/', routes);

app.use(express.static('./client')); 

var PORT = process.env.PORT || 5000;

app.get("*", function(req,res){
	res.status(404).send('uh oh! page not found')
});

app.listen(PORT, function(){
	console.log("Listening on port" + PORT);
});