var ArticleKeyword =  require('../model/ArticleKeyword');
async function getArticleKeyword(req, res) {
    var limit = parseInt(req.query.limit) || 4 
    var page = parseInt(req.query.page*limit) || 0 
    var ArticleSelectedId = parseInt(req.query.ArticleSelectedId) || 2753112 

    const articleKeyword = await ArticleKeyword.find({ArticleSelectedId : ArticleSelectedId}).limit(limit).skip(page).exec(); 
     res.send(articleKeyword);
   }
   module.exports = { getArticleKeyword }