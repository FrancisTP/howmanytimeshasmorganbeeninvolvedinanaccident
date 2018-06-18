var path = require("path");
var bodyParser = require('body-parser');

module.exports = function(app, io){
	app.use(bodyParser.urlencoded({ extended: true}));

	app.get('/', function(req, res) {
		res.render('home.html');
	});
};