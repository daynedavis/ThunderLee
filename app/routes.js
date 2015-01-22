module.exports = function(app, passport) {

	app.get('/', function(req, res) {
		res.sendfile('./public/home.html');
	});

	app.get('/about', function(req, res) {
		res.sendfile('./public/html/about.html');
	});

	app.get('/bluetell', function(req, res) {
		res.sendfile('./public/html/blue_tell.html');
	});
	
	app.get('/creamhappy', function(req, res) {
		res.sendfile('./public/html/cream_happy.html');
	});
	
	app.get('/lightblue', function(req, res) {
		res.sendfile('./public/html/light_blue_thunder.html');
	});
	
	app.get('/pink', function(req, res) {
		res.sendfile('./public/html/pink.html');
	});
	
	app.get('/whitethunder', function(req, res) {
		res.sendfile('./public/html/white_thunder.html');
	});
	
	app.get('/stripedrama', function(req, res) {
		res.sendfile('./public/html/stripe_drama.html');
	});
	
	app.get('/yellowdrama', function(req, res) {
		res.sendfile('./public/html/yellow_drama.html');
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
	app.get('/cart', function(req, res) {
		res.sendfile('./public/html/checkout.html');
	});

	app.post('/stripe', function(req, res) {

		// Set your secret key: remember to change this to your live secret key in production
		// See your keys here https://dashboard.stripe.com/account
		var stripe = require("stripe")("sk_test_SCMdCsdwdw2uUeLZeV01pYKj");

		console.log(req.body);

		// (Assuming you're using express - expressjs.com)
		// Get the credit card details submitted by the form
		var stripeToken = req.body.stripeToken;

		var charge = stripe.charges.create({
		  amount: 1000;//cart.blueTell.small * 2500 + cart.blueTell.medium * 2500 + cart.blueTell.large * 2500 + cart.blueTell.xlarge * 2500, // amount in cents, again
		  currency: "usd",
		  card: stripeToken,
		  description: "payinguser@example.com"
		}, function(err, charge) {
		  if (err && err.type === 'StripeCardError') {
			// The card has been declined
		  }
		});
	});
};
