module.exports = function(app, passport, nodemailer, Order) {

	app.get('/api/order', function(req, res) {

		Order.find(function(err, order) {

			if (err)
			res.send(err);

			res.json(order);
		});
	});

	app.post('/api/stripe', function(req, res) {
		var stripe = require("stripe")("sk_test_SCMdCsdwdw2uUeLZeV01pYKj");
		var totalAmount = 0;
		var cart = JSON.parse(req.body.data.cartData);
		for (var item in cart) {
			var quantity = cart[item].quantity;
			totalAmount+= (2500 * quantity);
		}

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
						var nodemailer = require('nodemailer');
						var transporter = nodemailer.createTransport({
							service: 'Gmail',
							auth: {
								user: 'thunderleeclothing@gmail.com',
								pass: 'Harvard321'
							}
						});

						var mailOptions = {
							from: 'Thunder Lee  <thunderleeclothing@gmail.com>',
							to: req.body.stripeEmail,
							bcc: 'thunderleeclothing@gmail.com',
							subject: 'Your Order With Us',
							text: 'We have received your order and are currently proccessing it. You will receive another email once your order has been shipped. Email us at thunderleeclothing@gmail.com with any questions or concerns.', // plaintext body
							html: '<b>We have received your order and are currently proccessing it. You will receive another email once your order has been shipped. Email us at thunderleeclothing@gmail.com with any questions or concerns.</b>' // html body
						};

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
