var Order = require('./models/order');
module.exports = function(app, passport) {

	// Admin Routes
	app.get('/api/order', function(req, res) {

		Order.find(function(err, order) {

			if (err)
			res.send(err);

			res.json(order); // return all user in JSON format
		});
	});

	// Site Routes
	app.get('/', function(req, res) {
		res.sendfile('./public/home.html');
	});

	app.get('/admin', function(req, res) {
		res.sendfile('./public/html/admin.html');
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
	
	app.get('/contact', function(req, res) {
		res.sendfile('./public/html/contact.html');
	});

	app.get('/error', function(req, res) {
		res.sendfile('./public/html/error.html');
	});

	app.post('/stripe', function(req, res) {

		// Set your secret key: remember to change this to your live secret key in production
		// See your keys here https://dashboard.stripe.com/account
		var stripe = require("stripe")("sk_test_SCMdCsdwdw2uUeLZeV01pYKj");
		var totalAmount = 0;
		var cart = JSON.parse(req.body.cartData);
		console.log(req.body);
		for (var shirt in cart) {
			var sizes = cart[shirt];
			for (var size in sizes) {
				var quantity = sizes[size];
				totalAmount+= (2500 * quantity);
			}
		}

		// (Assuming you're using express - expressjs.com)
		// Get the credit card details submitted by the form
		var stripeToken = req.body.stripeToken;

		var charge = stripe.charges.create({
		  amount: totalAmount,
		  currency: "usd",
		  card: stripeToken,
		  description: "payinguser@example.com"
		}, function(err, charge) {
		  if (err && err.type === 'StripeCardError') {
			// The card has been declined
		  }
			else {
				Order.create({
					name                   : req.body.stripeShippingName,
					email                  : req.body.stripeEmail,
					shippingAddressLine1   : req.body.stripeShippingAddressLine1,
					shippingAddressApt     : req.body.stripeShippingAddressApt,
					shippingAddressZip     : req.body.stripeShippingAddressZip,
					shippingAddressCity    : req.body.stripeShippingAddressCity,
					shippingAddressState   : req.body.stripeShippingAddressState,
					shippingAddressCountry : req.body.stripeShippingAddressCountry,
					cost                   : totalAmount,
					cart                   : req.body.cartData,
					done                   : false
				} , function(err, order) {
					if (err) {
						res.sendfile('./public/html/error.html');
						console.log(err);
					}
					else {
						res.sendfile('./public/html/success.html');

						// create reusable transporter object using SMTP transport
						var nodemailer = require('nodemailer');
						var transporter = nodemailer.createTransport({
							service: 'Gmail',
							auth: {
								user: 'thunderleeclothing@gmail.com',
								pass: 'Harvard321'
							}
						});

						// NB! No need to recreate the transporter object. You can use
						// the same transporter object for all e-mails

						// setup e-mail data with unicode symbols
						var mailOptions = {
							from: 'Thunder Lee  <thunderleeclothing@gmail.com>', // sender address
							to: req.body.stripeEmail, // list of receivers
							bcc: 'thunderleeclothing@gmail.com',
							subject: 'Your Order With Us', // Subject line
							text: 'We have received your order and are currently proccessing it. You will receive another email once your order has been shipped. Email us at thunderleeclothing@gmail.com with any questions or concerns.', // plaintext body
							html: '<b>We have received your order and are currently proccessing it. You will receive another email once your order has been shipped. Email us at thunderleeclothing@gmail.com with any questions or concerns.</b>' // html body
						};

						// send mail with defined transport object
						transporter.sendMail(mailOptions, function(error, info){
							if(error){
								console.log(error);
							}else{
								console.log('Message sent: ' + info.response);
							}
						});


					}
				});
			}
		});
	});
};
