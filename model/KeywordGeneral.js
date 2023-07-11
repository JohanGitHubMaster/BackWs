let mongoose = require('mongoose');
let Schema = mongoose.Schema;
var aggregatePaginate = require("mongoose-aggregate-paginate-v2");

let KeywordGeneralSchema = Schema({
    ProfileAdditionNl:String, 
    ProfileAdditionHtmlnl:String,
    ProfileAdditionFr:String,
    ProfileAdditionHtmlfr:String,
    KeywordGeneralId:Number,
    Orderid:Number,
},{ collection: 'KeywordGeneral'});

KeywordGeneralSchema.plugin(aggregatePaginate);
module.exports = mongoose.model('KeywordGeneral', KeywordGeneralSchema);