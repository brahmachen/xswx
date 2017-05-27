var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var SchoolCustomeSchema = new Schema({
	name: {
		type:String,
		unique: true
	},
	address: String,
	rate: {
		overall: Number, 			// 计算评分
		reputation: Number, 		// 声望
		location: Number, 			// 地理位置
		internet: Number, 			// 网络状况
		food: Number, 				// 食宿状况
		social: Number, 			// 社交活动
		clubs: Number, 				// 社团活动
		facilities: Number 			// 硬件设施
	},
	top_pro: [String]				// 顶级教授
})
SchoolCustomeSchema.index({name:1},{unique:true});
mongoose.model('SchoolCustome',SchoolCustomeSchema);
