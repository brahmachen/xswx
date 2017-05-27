var School = require('../../proxy/school.js');
var SchoolCustome = require('../../proxy').SchoolCustome

exports.test = function(){
	School.newAndSave();
}

exports.findOne = function(){
	School.getSchools();
}
