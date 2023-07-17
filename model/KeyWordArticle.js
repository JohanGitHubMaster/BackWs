let mongoose = require('mongoose');
let Schema = mongoose.Schema;
var aggregatePaginate = require("mongoose-aggregate-paginate-v2");

let MapKeyWordArticleSchema = Schema({
    ArticleSelectedId: Number,
    OrderId: Number,
    SourceId: Number,
    KeywordSource: String,
    KeywordFound: String,
    NbOfHits: Number
},{ collection: 'KeyWordArticle'});

MapKeyWordArticleSchema.plugin(aggregatePaginate);
module.exports = mongoose.model('KeyWordArticle', MapKeyWordArticleSchema);