let mongoose = require('mongoose');
let Schema = mongoose.Schema;
var aggregatePaginate = require("mongoose-aggregate-paginate-v2");

let ArticleSelectedSchema = Schema({
ArticleSelectedId: Number,
OrderId :Number,
SourceId: Number,
SelectionDate :Date,
ToTreat: Boolean,
Validated : Boolean,
ValidatedBy : String,
ValidationDate : Date,
Cut : Number,
CutBy : String,
CutDate : Date,
Comment : String,
RubricId : Number,
CutType : Number,
Uivalidated : Number,
FromWebFindSvc : Boolean

},{ collection: 'ArticleSelected'});

ArticleSelectedSchema.plugin(aggregatePaginate);
module.exports = mongoose.model('ArticleSelected', ArticleSelectedSchema);







