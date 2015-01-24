$(document).ready(function() {
	var ordersText = $.ajax({
		type: "get",
		async: false,
		url: ("http://localhost:8080/api/order"),
		success: function(msg) {
		},
		error: function(err) {
			console.log('Error');
		}
	});
  var orders = JSON.parse(ordersText.responseText);
	for (var i = 0; i < orders.length; i++) {
		var cart = JSON.parse(orders[i].cart);
		$('#ListedOrders').append("<table><thead><tr><th colspan='3'>" + orders[i].name + " | " + orders[i].email + "</th></tr><tr><td colspan='3'>" + orders[i].shippingAddressLine1 + " " + orders[i].shippingAddressApt + " " + orders[i].shippingAddressCity + ", " + orders[i].shippingAddressState + " " + orders[i].shippingAddressZip + "</td></tr><tr><th>Item</th><th>Size</th><th>Quantity</th></tr></thead><tbody id='checkoutBody" + i +"'></tbody></table>");
		for (var shirt in cart) {
			var sizes = cart[shirt];
			for (var size in sizes) {
				var quantity = sizes[size];
				if (quantity > 0) {
					$('#checkoutBody' + i).append("<tr><td>" + shirt + "</td><td>" + size + "</td><td>" + quantity);
				}
			}
		}
	}
});
