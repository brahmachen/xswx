var School = require('../models').School

exports.getSchools = function(callback){
	School.findOne({schoolname: "山东农业大学"}, (err, school) => {
		if(err){
			return callback(err);
		}
		console.log(school);
	})
}

// 根据输入名称模糊查询
exports.searchByName = function(name, callback){
	var query = {};
	var nameArr = [];
	for(let i = 0;i < name.length; i++){
		nameArr.push(name[i]);
	}
	var reg = nameArr.join('.*');
//	var reg = '/'+ nameArr.join(".*") + '/';	
	console.log(reg);
	query["schoolname"] = new RegExp(reg,'i');
//	query.schoolname = eval(reg);
	School.find(query, (err, docs) => {
		if(err){
			callback(err);
		} else {
			console.log(docs.length);
		}
	})
}
// 根据输入名称模糊查询 ,分页
exports.searchByNamePaged = function(name, page, pageSize, callback){
	page = page || 1;
	pageSize = pageSize || 10;
	if(pageSize > 50) pageSize = 50;
	var start = (page - 1) * pageSize;
	var query = {};
	var nameArr = [];
	for(let i = 0;i < name.length; i++){
		nameArr.push(name[i]);
	}
	var reg = nameArr.join('.*');
//	var reg = '/'+ nameArr.join(".*") + '/';	
	console.log(reg);
	query["schoolname"] = new RegExp(reg,'i');
//	query.schoolname = eval(reg);
	School.find(query).skip(start).limit(pageSize).sort([["schoolid",1]]).exec((err, docs) => {
		if(err){
			callback(err);
		} else {
			console.log(docs);
		}
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