//	请求学校信息并存入到 message.json文件中
//	使用async异步，使用surperagent请求，使用async.mapLimit控制并发数
// 	关于async.mapLimit，参考https://github.com/alsotang/node-lessons/blob/master/lesson5/app.js


var async = require('async');

var fs = require('fs');

var request = require('superagent');
var concurrencyCount = 0;

var total = 2771;
var schools = [];
var fetchUrl = function(url, callback) {
	var delay = parseInt((Math.random() * 10000000) % 2000, 10);
	concurrencyCount++;
	console.log('现在的并发数是', concurrencyCount, '，正在抓取的是', url, '，耗时' + delay + '毫秒');

	request.get(url).end(function(err, res) {
		if(err) {
			console.log("请求出错:" + err);
		} else {
			console.log("got data");
			var resobj =  JSON.parse(res.text);
			schools = schools.concat(resobj.school);
			console.log(schools.length);
		}
		concurrencyCount--;
		callback(null, url + ' html content');
	})
};

var urls = [];
var baseUrl = "http://data.api.gkcx.eol.cn/soudaxue/queryschool.html?messtype=json&size=50&page=";
var totalPage = total / 50 + 1;
for(let i = 1; i < totalPage; i++) {
	urls.push(baseUrl + i);
}

async.mapLimit(urls, 5, function(url, callback) {
	fetchUrl(url, callback);
}, function(err, result) {
	console.log('final:');
	console.log(schools);
	fs.writeFile('message.json', JSON.stringify(schools), function (err) {
		    if (err) throw err;
		    console.log('It\'s saved!'); //文件被保存
		});
});