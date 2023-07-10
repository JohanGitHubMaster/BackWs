let mongoose = require('mongoose');
let Schema = mongoose.Schema;
var aggregatePaginate = require("mongoose-aggregate-paginate-v2");

let VArticleToValidateTreatSchema = Schema({
  ArticleSelectedId: Number,
  OrderId: Number,
  SelectionDate: Date,
  Validated: Boolean,
  ValidationDate: Date,
  Comment: String,
  SourceId: Number,
  SourceUrl: String,
  Title:String,
  Text: String,
  Country: String,
  Lang: String,
  WordCount: Number,
  PublicationDate: Date,
  Author: String,
  Url: String
},{ collection: 'VOrderToValidate'});

VArticleToValidateTreatSchema.plugin(aggregatePaginate);
module.exports = mongoose.model('VOrderToValidate', VArticleToValidateTreatSchema);

