var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var orderSchema = new Schema({
	name                   : String,
	email                  : String,
	shippingAddressLine1   : String,
	shippingAddressApt     : String,
	shippingAddressZip     : String,
	shippingAddressCity    : String,
	shippingAddressState   : String,
	shippingAddressCountry : String,
	cost                   : Number,
	cart                   : String
});

module.exports = mongoose.model('order', orderSchema);
