let mongoose = require('mongoose');
let Schema = mongoose.Schema;
var aggregatePaginate = require("mongoose-aggregate-paginate-v2");

let VKeywordDescriptionSchema = Schema({
    Orderid: Number,
    KeywordDescHtmlfrweb: String,
    KeywordDescHtmlnlweb: String,
    KeywordName: String,
    KeywordDescriptionId: Number
},{ collection: 'VKeywordDescription'});

VKeywordDescriptionSchema.plugin(aggregatePaginate);
module.exports = mongoose.model('VKeywordDescription', VKeywordDescriptionSchema);