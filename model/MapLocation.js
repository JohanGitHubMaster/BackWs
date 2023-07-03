let mongoose = require('mongoose');
let Schema = mongoose.Schema;
var aggregatePaginate = require("mongoose-aggregate-paginate-v2");

let MapLocationSchema = Schema({
      MapLocationId: Number,
      DescFrench: String,
      DescDutch: String,
      DescEnglish: String,
      DescGerman: String,
      Description: String,
      ListOrder: Number,
      Active: Boolean
},{ collection: 'MapLocation'});

MapLocationSchema.plugin(aggregatePaginate);
module.exports = mongoose.model('MapLocation', MapLocationSchema);