$(document).ready(function() {
	if (localStorage.getItem("cart") === null) {
		cart = { 'blueTell': {}, 'creamHappy': {}, 'lightBlueThunder': {}, 'pink': {},
		'whiteThunder': {}, 'stripeDrama': {}, 'yellowDrama': {}};
		localStorage.setItem('cart', JSON.stringify(cart));
		console.log(cart);
	}
	else {
		cart = JSON.parse(localStorage.getItem('cart'));
		console.log(cart);
	}
	for (var shirt in cart) {
		console.log('shirt');
		var sizes = cart[shirt];
		for (var size in sizes) {
			var quantity = sizes[size];
			$('#checkoutBody').append("<tr><td>" + shirt + "</td><td>" + size + "</td><td>" + quantity);
		}
	}
});
