let mongoose = require('mongoose');
let Schema = mongoose.Schema;
var aggregatePaginate = require("mongoose-aggregate-paginate-v2");

let KeywordDescriptionSchema = Schema({
    KeywordDescriptionId: Number,
    KeywordLineId: Number,
    KeywordName: String,
    KeywordDescFr: String,
    KeywordDescNl: String,
    KeywordDescHtmlfr: String,
    KeywordDescHtmlnl: String,
    KeywordWebDescriptionHtml: String,
    KeywordDescHtmlfrweb: String,
    KeywordDescHtmlnlweb: String,
    KeywordLine: String
},{ collection: 'KeywordDescription'});

KeywordDescriptionSchema.plugin(aggregatePaginate);
module.exports = mongoose.model('KeywordDescription', KeywordDescriptionSchema);