let mongoose = require('mongoose');
let Schema = mongoose.Schema;
var aggregatePaginate = require("mongoose-aggregate-paginate-v2");

let VWebOrdersSchema = Schema({
    id: Number,
    dateDeRendu: Date,
    nom: String,
    rendu: Boolean
},{ collection: 'VwebOrders'});

VWebOrdersSchema.plugin(aggregatePaginate);
module.exports = mongoose.model('VwebOrders', VWebOrdersSchema);