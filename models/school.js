var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var SchoolSchema = new Schema({
    schoolid : Number,
    schoolname : String,
    clicks : Number,
    monthclicks : Number,
    weekclicks : Number,
    province : String,
    schooltype : String,
    schoolproperty : String,
    edudirectly : String,
    f985 : String,
    f211 : String,
    level : String,
    autonomyrs : String,
    library : String,
    membership : String,
    schoolnature : String,
    shoufei : String,
    jianjie : String,
    schoolcode : String,
    ranking : Number,
    rankingCollegetype : Number,
    guanwang : String,
    oldname : String,
    ads : String,
    center : String,
    master : String,
    num : Number
})
SchoolSchema.index({schoolname:1},{unique:true});
mongoose.model('School',SchoolSchema);
