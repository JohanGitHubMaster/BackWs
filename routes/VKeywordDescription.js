const vkeywordDescription = require('../model/VkeywordDescription');
async function getVkeywordDescription(req, res) {
    try{
      var limit = parseInt(req.query.limit) || 10 
      var page = parseInt(req.query.page*limit) || 0 
      var orderId = parseInt(req.query.Orderid) || 26062
      var result = await vkeywordDescription.find({Orderid:orderId}).limit(limit).skip(page).exec();
      res.send(result);
    }
    catch(error){
      res.send(error);
    }  
}

module.exports = { getVkeywordDescription }