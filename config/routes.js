module.exports = function(app, passport, nodemailer, Order) {

	// Admin Routes
	app.get('/api/order', function(req, res) {

		Order.find(function(err, order) {

			if (err)
			res.send(err);

			res.json(order); // return all user in JSON format
		});
	});

	app.post('/api/stripe', function(req, res) {
		// Set your secret key: remember to change this to your live secret key in production
		// See your keys here https://dashboard.stripe.com/account
		var stripe = require("stripe")("sk_test_SCMdCsdwdw2uUeLZeV01pYKj");
		var totalAmount = 0;
		var cart = JSON.parse(req.body.data.cartData);
		for (var item in cart) {
			var quantity = cart[item].quantity;
			totalAmount+= (2500 * quantity);
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
						res.send('error');
						console.log(err);
					}
					else {
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
						res.send('success');
					}
				});
			}
		});
	});

};
