const ArticleSelected = require('../model/ArticleSelected');
// var VWebOrder =  require('../model/ArticleSelected');
// function getArticlesSelecteds(req, res) {
//     var aggregateQuery = VWebOrder.aggregate();
    
//     ArticleSelected.aggregatePaginate(aggregateQuery,
//       {
//         page: parseInt(req.query.page) || 1,
//         limit: parseInt(req.query.limit) || 10,
//       },
//       (err, articleSelected) => {
//         if (err) {
//           res.send(err);
//         }
//         else{
//             res.send(articleSelected);
//         }      
//       }
//     );
//    }
//    module.exports = { getArticlesSelecteds }

async function UpdateArticleSelected(req, res) {
    try{
      var validated = req.query.Validated || undefined 
      var validatedBy = req.query.ValidatedBy || undefined
      var toTreat = req.query.ToTreat || undefined
      var articleSelectedId = parseInt(req.query.ArticleSelectedId) || undefined
      var comment = req.query.Comment
    await ArticleSelected.updateOne(
        { ArticleSelectedId: articleSelectedId },
        { $set: 
            { 
                Validated : validated, 
                ValidatedBy : validatedBy, 
                ToTreat : toTreat,
                Comment:comment 
            } 
        }
      ).exec();
    
      res.JSON("update éffectuer");
      
    }
    catch(error){
      res.send(error);
    }  
  }

  module.exports = { UpdateArticleSelected }


   