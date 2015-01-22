if (localStorage.getItem("cart") === null) {
	var cart = { 'redShirt': 0, 'blueShirt': 0};
	localStorage.setItem('cart', JSON.stringify(cart));
	console.log(cart);
}
else {
	var cart = JSON.parse(localStorage.getItem('cart'));
	console.log(cart);
}

$(document).ready(function() {

	// Toggles pictures on the clothing pages
	$("#small1").click(function() {
		$("#big").attr('src', '../img/clothes_content2.png');
	});
	$("#small2").click(function() {
		$("#big").attr('src', '../img/clothes_content3.png');
	});
	$("#small3").click(function() {
		$("#big").attr('src', '../img/clothes_content.png');
	});

	// fades out pictures for added fx
	$(".page-third, #featured, #small1, #small2, #small3").hover(function() {
		$(this).fadeTo("fast", 0.5);
	}, function() {
		$(this).fadeTo("fast", 1);
	});

	$("#redShirt").click(function() {
		cart = JSON.parse(localStorage.getItem('cart'));
		cart.redShirt+= 1;
		console.log(cart);
		localStorage.setItem('cart', JSON.stringify(cart));
	});

	$("#blueShirt").click(function() {
		cart = JSON.parse(localStorage.getItem('cart'));
		cart.blueShirt+= 1;
		console.log(cart);
		localStorage.setItem('cart', JSON.stringify(cart));
	});
});

function swapImages() {
	var $active = $('#banner .active');
	var $next = ($('#banner .active').next().length > 0) ? $('#banner .active').next() : $('#banner img:first');
	$active.fadeOut(function() {
		$active.removeClass('active');
		$next.fadeTo("slow", 1).addClass('active');
	});
}
setInterval(swapImages(), 5000);
