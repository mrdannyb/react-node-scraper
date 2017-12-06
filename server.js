const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes');
//initialize my server, give it a channel
const express = express();
const port = process.env.PORT || 3001;
//For sending routes and ajax requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()):
//Set up static assets
app.use(express.static($$$$$$$));
//Add tubes
app.use(routes);

//Let me use promises with mongoose!!!
mongoose.Promise = global.Promise;
//At the mongo DB
const mongo_uri = process.env.MONGODB_URI || "mongodb://localhost/mernscrape";
mongoose.connect(mongo_uri, { useMongoClient:true });

app.listen(port,function () {
  console.log(`You're tuning into server radio, port ${port}`);
});
