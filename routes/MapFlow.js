var MapFlow =  require('../model/MapFlow');
async function getMapFlow(req, res) {
    const mapFlow = await MapFlow.find({}).exec(); 
     res.send(mapFlow);
   }
   module.exports = { getMapFlow }