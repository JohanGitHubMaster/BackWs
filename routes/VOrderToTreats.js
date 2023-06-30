var VOrderToTreat =  require('../model/VOrderToTreat');
function getVOrderToTreat(req, res) {
    var aggregateQuery = VOrderToTreat.aggregate();
    
    VOrderToTreat.aggregatePaginate(aggregateQuery,
      {
        page: parseInt(req.query.page) || 1,
        limit: parseInt(req.query.limit) || 10,
      },
      (err, vOrderToTreat) => {
        if (err) {
          res.send(err);
        }
        else{
            res.send(vOrderToTreat);
        }      
      }
    );
   }

   module.exports = { getVOrderToTreat }