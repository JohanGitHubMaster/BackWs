var VWebOrder =  require('../model/VWebOrders');
function getVWebOrders(req, res) {
    var aggregateQuery = VWebOrder.aggregate();
    
    VWebOrder.aggregatePaginate(aggregateQuery,
      {
        page: parseInt(req.query.page) || 1,
        limit: parseInt(req.query.limit) || 10,
      },
      (err, vweborders) => {
        if (err) {
          res.send(err);
        }
        else{
            res.send(vweborders);
        }      
      }
    );
   }

   async function getWebOrderById(req, res) {
    try{
      var OrderId = parseInt(req.query.OrderId)
      var result = await VWebOrder.findOne({OrderId:OrderId}).exec();
      res.send(result);
    }
    catch(error){
      res.send(error);
    }  
  }

   module.exports = { getVWebOrders,getWebOrderById }