//	读取message.json数据并存入mongodb中

var MongoClient = require('mongodb').MongoClient,
	assert = require('assert');
// Connection URL
var url = 'mongodb://localhost:27017/xswx';
var fs=require('fs');

// Use connect method to connect to the server
MongoClient.connect(url, function(err, db) {
	assert.equal(null, err);
	console.log("Connected successfully to server");
	
	var file="./message.json";
	var res=JSON.parse(fs.readFileSync( file));
	console.log(res);
	var collection = db.collection("school");
	collection.insertMany(res,function(err, res){
		console.log(res);
	});
});