var mongoose = require('mongoose')
var path = require('path')
var Schema = mongoose.Schema;


var FriendSchema = new mongoose.Schema({
	fname: String,
	lname: String,
	dob: {type: Date, format: 'MM-DD-YYYY', default: Date.now}
}, {timestamps :true});

var Friend = mongoose.model('Friend', FriendSchema)


