const statistics = require('../model/Statistics');
const statisticsuser = require('../model/StatisticPerUser');
async function getStatistics(req, res) {
    try{
         var limit = parseInt(req.query.limit) || 10 
    //   var page = parseInt(req.query.page*limit) || 0 
    //   var orderId = parseInt(req.query.Orderid) || 26062
      var result = await statistics.find({}).limit(limit).exec();
      res.send(result);
    }
    catch(error){
      res.send(error);
    }  
}

async function getstatisticsuser(req, res) {
    try{
         var limit = parseInt(req.query.limit) || 10 
    //   var page = parseInt(req.query.page*limit) || 0 
    //   var orderId = parseInt(req.query.Orderid) || 26062
    
      var result = await statisticsuser.find({}).limit(limit).exec();
      res.send(result);
    }
    catch(error){
      res.send(error);
    }  
}
async function getusername(req, res) {
var os = require('os');
res.send('{"user":"'+os.userInfo().username+'"}')
}

module.exports = { getStatistics ,getstatisticsuser,getusername}