let mongoose = require('mongoose');
let Schema = mongoose.Schema;
var aggregatePaginate = require("mongoose-aggregate-paginate-v2");

let MapFlowSchema = Schema({
    MapFlowId: Number,
    DescFrench: String,
    DescDutch: String,
    DescEnglish: String,
    DescGerman: String,
    Description: String,
    ListOrder: Number,
    Active: Boolean,
},{ collection: 'MapFlow'});

MapFlowSchema.plugin(aggregatePaginate);
module.exports = mongoose.model('MapFlow', MapFlowSchema);