var express = require('express');
var app = express();
var path = require('path')
var bodyParser = require('body-parser');

require('./server/config/mongoose.js')
// body parser json needs to be above routes otherwise it wont parse things correctly
app.use(bodyParser.json())
require('./server/config/routes.js')(app)


app.use(express.static(path.join(__dirname, './client/static')));
app.use(express.static(path.join(__dirname, './client')));
app.use(express.static(path.join(__dirname, './bower_components')));


app.listen(8000, function(){
	console.log("Port 8000")
})