const KeywordGeneral = require('../model/KeywordGeneral');
async function getKeywordGeneral(req, res) {
    try{
      var limit = parseInt(req.query.limit) || 10 
      var page = parseInt(req.query.page*limit) || 0 
      var orderid = parseInt(req.query.Orderid) || 25366
      var result = await KeywordGeneral.find({Orderid:orderid},{ProfileAdditionNl:1, ProfileAdditionHtmlnl:1,ProfileAdditionFr:1,ProfileAdditionHtmlfr:1,KeywordGeneralId:1,Orderid:1}).limit(limit).skip(page).exec();
      res.send(result);
    }
    catch(error){
      res.send(error);
    }  
  }
  module.exports = { getKeywordGeneral }