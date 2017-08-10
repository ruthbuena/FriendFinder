// Dependencies for Express, Body-Parser and Path
var express=require("express");
var bodyParser=require("body-parser");
var path=require("path");

var app=express();

// PORT connection (process.env works for Heroku set up)
var PORT = process.env.PORT||3000;

// Documentation for Body-Parser node package used to parse bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// Routing
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

app.listen(PORT, function(){
  console.log("We're listening on PORT: " + PORT);
});
