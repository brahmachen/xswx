var School = require('../models').School

exports.getSchools = function(id, callback){
	School.findOne({name: "山东农业大学"}, (err, school) => {
		if(err){
			return callback(err);
		}
		console.log(school);
	})
}

//export.insertOne = (school, callback) => {
//	School.
//}

exports.newAndSave = function(name, rate){
	var school = new School();
	school.name = name;
	school.rate.overall = '3.2';
	school.rate.reputation = '4.1';
	school.rate.location = '2.3';
	school.rate.internet = '4.5';
	school.rate.social = '3.4';
	school.rate.clubs = '3.4';
	school.rate.facilities = '3.4';
	school.top_pro = ["教授1","教授2","教授3"];
	
	school.save();
}