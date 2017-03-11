var Massive = require("massive")
  , http = require("http")
  , express = require("express")
  , app = express();

/* database config */
var connectionString = "postgres://postgres:Saadat123@localhost/pgguide";
var db = Massive.connectSync({connectionString : connectionString});

/* http routes */

/* GET /products ==> List all Products */
app.get("/pgguide/products",(req,res) => {
	if(req.query.name) {
		db.run('SELECT * FROM PRODUCTS WHERE TITLE LIKE \'' + req.query.name + '\'', (err, result) => {
			res.send(result);
		});
	} else {
		db.products.find({}, (err, result) => {
			res.send(result);
		});
	}
});

/* SQL injection: http://localhost:3000/pgguide/products?name=Dictionary%27;select%20*%20from%20users;-- */

/*; SELECT * FROM USERS;-- */

/* listen on port 3000 */
var server = http.createServer(app);
server.listen(3000);
