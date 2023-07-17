let mongoose = require('mongoose');
let Schema = mongoose.Schema;
var aggregatePaginate = require("mongoose-aggregate-paginate-v2");

let ArticleKeywordSchema = Schema({
    ArticleKeywordId: Number,
    ArticleSelectedId: Number,
    Extract: String,
    ExtractKeyword: String,
    ListOrder: Number,
},{ collection: 'ArticleKeyword'});

ArticleKeywordSchema.plugin(aggregatePaginate);
module.exports = mongoose.model('ArticleKeyword', ArticleKeywordSchema);