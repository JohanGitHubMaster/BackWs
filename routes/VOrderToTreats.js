var VOrderToTreat =  require('../model/VOrderToTreat');
var ArticleSelected = require('../model/ArticleSelected');
var OrderSetting = require('../model/OrderSetting');
const VWebOrders = require('../model/VWebOrders');
const MapLocation = require('../model/MapLocation');
const MapFlow = require('../model/MapFlow');

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

   // Récupérer tous les assignments (GET)

 


   async function getOrderToTreat(req, res) {
    try {

      const page = parseInt(req.query.page) || 0;
      const limit = parseInt(req.query.limit) || 10;
      const orderId = parseInt(req.query.orderId) || undefined;

      const customerId = parseInt(req.query.customerId) || undefined;
      const article = await ArticleSelected.find({}, { OrderId: 1, ArticleSelectedId: 1 }).sort({ OrderId: 1 }).exec();
      var vweborder = [];

      if(orderId != null && orderId!= undefined){
        vweborder = await VWebOrders.find({OrderId:orderId}, { OrderId: 1, OrderName: 1, Active : 1, Customer : 1, CustomerId:1 }).sort({ OrderId: 1 }).exec();
      }
      else if(customerId!= null && customerId!= undefined){
        vweborder = await VWebOrders.find({CustomerId:customerId}, { OrderId: 1, OrderName: 1, Active : 1, Customer : 1, CustomerId:1 }).sort({ OrderId: 1 }).exec();
      }     
      else
        vweborder = await VWebOrders.find({}, { OrderId: 1, OrderName: 1, Active : 1, Customer : 1, CustomerId:1 }).sort({ OrderId: 1 }).exec();

        console.log(orderId)
        console.log(customerId)
       // console.log(vweborder)
      
      const orderSetting = await OrderSetting.find({}, { Orderid: 1,MapLocationId:1,MapFlowId:1 ,WebPriority : 1 }).exec();
      const mapLocation = await MapLocation.find({}, { DescFrench: 1, MapLocationId:1  }).exec();
      const mapFlow = await MapFlow.find({}, { DescFrench: 1, MapFlowId:1 }).exec();
      
      const vweborderLookup = vweborder.reduce((lookup, vweborderItem) => {
        lookup[vweborderItem.OrderId] = vweborderItem;
        return lookup;
      }, {});
      
      const mapLocationLookup = mapLocation.reduce((lookup, mapLocationSettingItem) => {
        lookup[mapLocationSettingItem.MapLocationId] = mapLocationSettingItem;
        return lookup;
      }, {});

      const mapFlowLookup = mapFlow.reduce((lookup, mapFlowSettingItem) => {
        lookup[mapFlowSettingItem.MapFlowId] = mapFlowSettingItem;
        return lookup;
      }, {});

      const orderSettingLookup = orderSetting.reduce((lookup, orderSettingItem) => {
        lookup[orderSettingItem.Orderid] = orderSettingItem;
        return lookup;
      }, {});
  
      const joinedResult = article.map((articleItem) => ({
        ...articleItem._doc,
        OrderName: vweborderLookup[articleItem.OrderId]?.OrderName || null,
        Customer: vweborderLookup[articleItem.OrderId]?.Customer || null,
        CustomerId: vweborderLookup[articleItem.OrderId]?.CustomerId || null,
        Active:vweborderLookup[articleItem.OrderId]?.Active || null,
        WebPriority : orderSettingLookup[articleItem.OrderId]?.WebPriority || null,             
        maplocation : mapLocationLookup[orderSettingLookup[articleItem.OrderId]?.MapLocationId]?.DescFrench || null,
        maplocationId : mapLocationLookup[orderSettingLookup[articleItem.OrderId]?.MapLocationId]?.MapLocationId || null,
        mapFlow : mapFlowLookup[orderSettingLookup[articleItem.OrderId]?.MapFlowId]?.DescFrench || null,
        MapFlowId : mapFlowLookup[orderSettingLookup[articleItem.OrderId]?.MapFlowId]?.MapFlowId || null,
      }));
      // console.log(joinedResult)
      const arrayUniqueByKey = [...new Map(joinedResult.map(item => [item['OrderId'], item])).values()];
      console.log(arrayUniqueByKey.length)
      res.send(arrayUniqueByKey.filter(x=>x.OrderName != null).slice(page,limit+page));
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
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

  module.exports = { getVOrderToTreat,getVOrderToTreatLimit,getVOrderToTreattest,getOrderToTreat }