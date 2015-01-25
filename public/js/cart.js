$(document).ready(function() {
	if (localStorage.getItem("cart") === null) {
		cart = { 'blueTell': {'small':0, 'medium':0, 'large':0, 'xlarge':0},
				 'creamHappy': {'small':0, 'medium':0, 'large':0, 'xlarge':0},
				 'lightBlueThunder': {'small':0, 'medium':0, 'large':0, 'xlarge':0},
				 'pink': {'small':0, 'medium':0, 'large':0, 'xlarge':0},
				 'whiteThunder': {'small':0, 'medium':0, 'large':0, 'xlarge':0},
				 'stripeDrama': {'small':0, 'medium':0, 'large':0, 'xlarge':0},
				 'yellowDrama': {'small':0, 'medium':0, 'large':0, 'xlarge':0}};
		localStorage.setItem('cart', JSON.stringify(cart));
		console.log(cart);
	}
	else {
		cart = JSON.parse(localStorage.getItem('cart'));
		$('#cartData').val(localStorage.getItem('cart'));
	}
	var total = 0;
	for (var shirt in cart) {
		var sizes = cart[shirt];
		for (var size in sizes) {
			var quantity = sizes[size];
			if (quantity > 0) {
				$('#checkoutBody').append("<tr><td>" + shirt + "</td><td>" + size + "</td><td>" + quantity);
				total += 30*quantity;
			}
		}
	}

	$('#total').append('$' + total);
});
