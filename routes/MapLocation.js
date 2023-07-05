var MapLocation =  require('../model/MapLocation');
async function getMapLocation(req, res) {
    const mapLocation = await MapLocation.find({}).exec(); 
     res.send(mapLocation);
   }
   module.exports = { getMapLocation }