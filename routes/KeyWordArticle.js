var KeyWordArticle =  require('../model/KeyWordArticle');
async function getKeywordArticle(req, res) {
    var limit = parseInt(req.query.limit) || 10 
    var page = parseInt(req.query.page*limit) || 0 
    var ArticleSelectedId = parseInt(req.query.ArticleSelectedId) || 2753112 

    const keyWordArticle = await KeyWordArticle.find({ArticleSelectedId : ArticleSelectedId}).limit(limit).skip(page).exec(); 
     res.send(keyWordArticle);
   }
   module.exports = { getKeywordArticle }
   