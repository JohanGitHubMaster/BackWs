var KeywordDescription =  require('../model/KeywordDescription');
async function getKeywordDescription(req, res) {
    var keywordName = req.query.KeywordName || ''
    console.log(keywordName)
    // const keywordDescription = await KeywordDescription.findOne({KeywordName : keywordName}).exec(); 
    const keywordDescription = await KeywordDescription.findOne({'KeywordName': {'$regex': keywordName,$options:'i'}}).exec(); 
     res.send(keywordDescription);
   }
   module.exports = { getKeywordDescription }