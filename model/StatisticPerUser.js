let mongoose = require('mongoose');
let Schema = mongoose.Schema;
var aggregatePaginate = require("mongoose-aggregate-paginate-v2");

let VArticleToValidateTreatSchema = Schema({
  _id:String,
  count:Number,
},{ collection: 'StatisticsNbArttreatPerUser'});

VArticleToValidateTreatSchema.plugin(aggregatePaginate);
module.exports = mongoose.model('StatisticsNbArttreatPerUser', VArticleToValidateTreatSchema);