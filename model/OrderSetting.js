let mongoose = require('mongoose');
let Schema = mongoose.Schema;
var aggregatePaginate = require("mongoose-aggregate-paginate-v2");

let OrderSettingsSchema = Schema({
      OrderSettingsId: Number,
      Orderid: Number,
      Ave: Boolean,
      White: Boolean,
      MapHighlightTypeId: Number,
      MapCoverpageTypeId: Number,
      Qa: Boolean,
      IsWebClip: Boolean,
      WebClipActive: Boolean,
      IsWrittenPress: Boolean,
      MapLocationId: Number,
      WebPriority: Number,
      MapSendingLinkId: Number,
      MapCutTypeId: Number,
      Qaweb: Boolean,
      MapHighlightTypeWebId: Number,
      Aveweb: Boolean,
      WhiteWeb: Boolean,
      MapFlowId: Number,
      MapCoverpageType: Boolean,
      MapCutType: Boolean,
      MapFlow: Boolean,
      MapHighlightType: Boolean,
      MapLocation: Boolean,
      MapSendingLink: Boolean

},{ collection: 'OrderSetting'});

OrderSettingsSchema.plugin(aggregatePaginate);
module.exports = mongoose.model('OrderSetting', OrderSettingsSchema);







