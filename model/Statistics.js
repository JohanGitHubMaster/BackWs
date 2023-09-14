let mongoose = require('mongoose');
let Schema = mongoose.Schema;
var aggregatePaginate = require("mongoose-aggregate-paginate-v2");

let VArticleToValidateTreatSchema = Schema({
  _id:Number,
  count:Number,
},{ collection: 'StatisticsNbArtPerOrder'});

VArticleToValidateTreatSchema.plugin(aggregatePaginate);
module.exports = mongoose.model('StatisticsNbArtPerOrder', VArticleToValidateTreatSchema);