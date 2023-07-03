let mongoose = require('mongoose');
let Schema = mongoose.Schema;
var aggregatePaginate = require("mongoose-aggregate-paginate-v2");

let VWebOrdersSchema = Schema({
    OrderId: Number,
    OrderName: String,
    CustomerId: Number,
    Customer: String,
    KProject: Number,
    Active: Boolean,
    DateEnd: Date
},{ collection: 'VwebOrders'});

VWebOrdersSchema.plugin(aggregatePaginate);
module.exports = mongoose.model('VwebOrders', VWebOrdersSchema);