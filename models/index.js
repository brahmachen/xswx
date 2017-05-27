
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//var School = require('./api/v1/school.js');

mongoose.connect('mongodb://localhost/xswx');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	// we're connected!
	console.log("mongoose connected!")
//	School.test();
//	db.close();
});
require('./school')
require('./school_custome')

exports.School = mongoose.model('School')
exports.SchoolCustome = mongoose.model('SchoolCustome')

