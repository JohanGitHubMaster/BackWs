let mongoose = require('mongoose');
let Schema = mongoose.Schema;
var aggregatePaginate = require("mongoose-aggregate-paginate-v2");

let VOrderToTreatSchema = Schema({
    ASd : Object,
    VW : Object,
    Location: String,
    Origine: String
},{ collection: 'VOrderToTreat'});

VOrderToTreatSchema.plugin(aggregatePaginate);
module.exports = mongoose.model('VOrderToTreat', VOrderToTreatSchema);