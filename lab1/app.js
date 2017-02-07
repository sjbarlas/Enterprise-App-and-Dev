var express = require("express");
var app = express();
var http = require('http');
var massive = require("massive");
var connectionString = "postgres://postgres:Saadat123@localhost/pgguide";

// connect to Massive and get the db instance. You can safely use the
// convenience sync method here because its on app load
// you can also use loadSync - it's an alias
var massiveInstance = massive.connectSync({connectionString : connectionString}) 

// Set a reference to the massive instance on Express' app:
app.set('pgguide', massiveInstance);
http.createServer(app).listen(3000);

var db = app.get('pgguide');

db.users.find(function(err,res){
  console.log(res);
});

db.products.find(function(err,res){
  console.log(res);
});

db.purchases.find(function(err,res){
  console.log(res);
});

//db.purchase_items.find(function(err,res){
  //console.log(res);
//});

// Add endpoints

//app.get('/users', function (req, res) {
	//console.log(req);

//})


//db.run("select * from users", function(err,users){
  //product 1
//});

//app.get('/musician/:name', function(req, res) {

   // Get /musician/Matt
  // console.log(req.params.name)
   // => Matt
