/* Code for Part 6 */

var Massive = require("massive")
  , http = require("http")
  , express = require("express")
  , app = express();

/* database config */
var connectionString = "postgres://postgres:Saadat123@localhost/pgguide";
var db = Massive.connectSync({connectionString : connectionString});

/* http routes */

/* GET /users ==> List all Users */
app.get("/pgguide/users",function(req,res){
	db.users.find(function(err,data){
		res.send(data);
	});
});

/* GET /users/:id ==> List the User with ID 25 */
app.get("/pgguide/users/:id",function(req,res){
	db.users.find({id:25}, function(err,data){
		res.send(data);
	});
});

/* GET /products ==> List all Products */
app.get("/pgguide/products",function(req,res){
	db.products.find(function(err,data){
		res.send(data);
	});
});

/* GET /products/:id ==> List the Product with ID 7 */
app.get("/pgguide/products/:id",function(req,res){
	db.products.find({id:7}, function(err,data){
		res.send(data);
	});
});

/* GET /purchases ==> List all Purchases */
app.get("/pgguide/purchases",function(req,res){
	db.purchases.find(function(err,data){
		res.send(data);
	});
});

/* GET /purchases/:id ==> List the Purchase with ID 21 */
app.get("/pgguide/purchases/:id",function(req,res){
	db.purchases.find({id:21}, function(err,data){
		res.send(data);
	});
});

/* listen on port 3000 */
var server = http.createServer(app);
server.listen(3000);