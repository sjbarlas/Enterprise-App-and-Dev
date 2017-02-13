/* Code for Part 5 */

var Massive = require("massive")
  , http = require("http")
  , express = require("express")
  , app = express();

/* database config */
var connectionString = "postgres://postgres:Saadat123@localhost/pgguide";
var db = Massive.connectSync({connectionString : connectionString});

/* users table */
db.users.find(function(err,res){
	console.log(res);
});

/* products table */
db.products.find(function(err,res){
  console.log(res);
});

/* purchases table */
db.purchases.find(function(err,res){
  console.log(res);
});

/* purchase_items table */
db.purchase_items.find(function(err,res){
  console.log(res);
});

/* listen on port 3000 */
var server = http.createServer(app);
server.listen(3000);