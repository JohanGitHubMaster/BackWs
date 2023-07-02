var VOrderToTreat =  require('../model/VOrderToTreat');
function getVOrderToTreat(req, res) {
     var aggregateQuery = VOrderToTreat.find().limit(10);
    
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


   async function getVOrderToTreatLimit(req, res) {
    // //var aggregateQuery = VOrderToTreat.aggregate();
    VOrderToTreat.aggregate([
      // { $match: { /* Your match criteria */ } },
      // { $group: { _id: '$_id' } },

      { $skip: parseInt(req.query.page) || 0 },
      { $limit: parseInt(req.query.limit) || 10 },
      {
        $sort: {
          'Asd.OrderId': 1, // Sort in ascending order based on field1      
        }
      },
      // { $group: { _id: '$_id', document: { $first: '$$ROOT' }, } },
     
      // Additional pipeline stages...
    ])
    .then(async (results) => {
      console.log(results); // Result after skipping documents
      const distinctResults = [...new Map(results.map(item => [item._id.toString(), item.document])).values()];
    //console.log(distinctResults);
   await res.send(results);
    })
    .catch((error) => {
      console.error('Error executing aggregation:', error);
    });

//     const page = parseInt(req.query.page) || 0;
// const limit = parseInt(req.query.limit) || 10;

// VOrderToTreat.aggregate([
//   { $group: { _id: '$_id', document: { $first: '$$ROOT' } } },
//   { $skip: page },
//   { $limit: limit }
// ])
//   .then((results) => {
//     const distinctResults = results.map((result) => result.document);
//     console.log(distinctResults);
//     res.send(distinctResults);
//   })
//   .catch((error) => {
//     console.error('Error executing aggregation:', error);
//     // Handle error
//   });
  
   }


   function getVOrderToTreattest(req, res) {

    const options = {
      page: 1,       // Current page number (default: 1)
      limit: 10,     // Number of documents per page (default: 10)
    };
    // var aggregateQuery = VOrderToTreat.find();
   
    VOrderToTreat.aggregatePaginate(options)
    .then((result) => {
      console.log(result); // Paginated result

      res.send(result)

      
    })
    .catch((error) => {
      console.error('Error paginating documents:', error);
      res.send(error)
    });
  }

   
  
  
   
   module.exports = { getVOrderToTreat,getVOrderToTreatLimit,getVOrderToTreattest }