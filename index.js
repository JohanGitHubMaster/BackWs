let express = require('express');
let app = express();
let port = process.env.PORT || 8010;
let vweborder = require('./routes/VWebOrders');
let vOrderToTreat = require('./routes/VOrderToTreats');
let mapLocation = require('./routes/MapLocation');
let mapFlow = require('./routes/MapFlow');

let mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const uri = "mongodb://0.0.0.0:27017/DBWebselect?retryWrites=true&w=majority";
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
  };

mongoose.connect(uri, options)
  .then(() => {
    console.log("Connecté à la base MongoDB assignments dans le cloud !");
    console.log("at URI = " + uri);
    console.log("vérifiez with http://localhost:8010/api/assignments que cela fonctionne")
    },
    err => {
      console.log('Erreur de connexion: ', err);
    });

// Pour accepter les connexions cross-domain (CORS)
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
  });

// les routes
const prefix = '/api';

app.route(prefix + '/')
  .get(function (req, res, next) {res.send("Hello world")});

//VWEbOrders
app.route(prefix + '/vweborders')
  .get(vweborder.getVWebOrders)

  //VorderToTreat
app.route(prefix + '/vOrderToTreat')
  // .get(vOrderToTreat.getVOrderToTreat)
  .get(vOrderToTreat.getOrderToTreatSkipLimit)
  
app.route(prefix + '/vOrderToTreatLimit')
  .get(vOrderToTreat.getVOrderToTreatLimit)

  app.route(prefix + '/vOrderToTreattest')
  .get(vOrderToTreat.getVOrderToTreattest)

  app.route(prefix + '/orderToTreat')
  .get(vOrderToTreat.getOrderToTreat)

  app.route(prefix + '/vArticleToValidate')
  .get(vOrderToTreat.getVArticleToValidate)

  app.route(prefix + '/vArticleToValidateBysource')
  .get(vOrderToTreat.getVArticleToValidateSource)
  
  app.route(prefix + '/mapLocation')
  .get(mapLocation.getMapLocation)

  app.route(prefix + '/mapFlow')
  .get(mapFlow.getMapFlow)
  

// On démarre le serveur
app.listen(port, "0.0.0.0");
console.log('Serveur démarré sur http://localhost:' + port);

