// const ArticleSelected = require('../model/ArticleSelected');
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

   