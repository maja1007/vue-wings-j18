const express = require('express');
const app = express()
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 4000;
const cors = require('cors')
var morgan  = require('morgan')
const mongoose = require('mongoose')
const config = require('./DB.js')
const playerRoute = require('./player.route')

mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/players', playerRoute);

//"Middleware"
//Gör webbtjänsterna tillgängliga även från andra domäner
app.all("/*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "GET,PUT,PATCH,POST,DELETE");
  next();
});

app.listen(PORT, function(){
  console.log('Server is running on Port:',PORT);
});