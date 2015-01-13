module.exports = function(app, passport) {

	app.get('/', function(req, res) {
		res.sendfile('./public/home.html');
	});

	app.get('/about', function(req, res) {
		res.sendfile('./public/html/about.html');
	});

	app.get('/clothing', function(req, res) {
		res.sendfile('./public/html/clothing_template.html');
	});

	app.get('/featured', function(req, res) {
		res.sendfile('./public/html/featured.html');
	});

	app.get('/mens', function(req, res) {
		res.sendfile('./public/html/mens.html');
	});

	app.get('/womens', function(req, res) {
		res.sendfile('./public/html/womens.html');
	});
};
