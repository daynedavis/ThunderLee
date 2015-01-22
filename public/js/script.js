if (localStorage.getItem("cart") === null) {
	var cart = { 'blueTell': {}, 'creamHappy': {}, 'lightBlueThunder': {}, 'pink': {},
				 'whiteThunder': {}, 'stripeDrama': {}, 'yellowDrama': {}};
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
	
	
	$("#cartBlueTell").click(function() {
		cart = JSON.parse(localStorage.getItem('cart'));
		if($("#sizeBlueTell option:selected").text() == "Small") {
			cart.blueTell.small = $("#quantityBlueTell option:selected").val();
		}
		else if($("#sizeBlueTell option:selected").text() == "Medium") {
			cart.blueTell.medium = $("#quantityBlueTell option:selected").val();
		}
		else if($("#sizeBlueTell option:selected").text() == "Large") {
			cart.blueTell.large = $("#quantityBlueTell option:selected").val();
		}
		else if($("#sizeBlueTell option:selected").text() == "XLarge") {
			cart.blueTell.xlarge = $("#quantityBlueTell option:selected").val();
		};
		console.log(cart);
		localStorage.setItem('cart', JSON.stringify(cart));
	});

	$("#cartCreamHappy").click(function() {
		cart = JSON.parse(localStorage.getItem('cart'));
		if($("#sizeCreamHappy option:selected").text() == "Small") {
			cart.creamHappy.small = $("#quantityCreamHappy option:selected").val();
		}
		else if($("#sizeCreamHappy option:selected").text() == "Medium") {
			cart.creamHappy.medium = $("#quantityCreamHappy option:selected").val();
		}
		else if($("#sizeCreamHappy option:selected").text() == "Large") {
			cart.creamHappy.large = $("#quantityBlueTell option:selected").val();
		}
		else if($("#sizeCreamHappy option:selected").text() == "XLarge") {
			cart.creamHappy.xlarge = $("#quantityCreamHappy option:selected").val();
		};
		console.log(cart);
		localStorage.setItem('cart', JSON.stringify(cart));
	});
	
	$("#cartLightBlue").click(function() {
		cart = JSON.parse(localStorage.getItem('cart'));
		if($("#sizeLightBlue option:selected").text() == "Small") {
			cart.lightBlueThunder.small = $("#quantityLightBlue option:selected").val();
		}
		else if($("#sizeLightBlue option:selected").text() == "Medium") {
			cart.lightBlueThunder.medium = $("#quantityLightBlue option:selected").val();
		}
		else if($("#sizeLightBlue option:selected").text() == "Large") {
			cart.lightBlueThunder.large = $("#quantityLightBlue option:selected").val();
		}
		else if($("#sizeLightBlue option:selected").text() == "XLarge") {
			cart.lightBlueThunder.xlarge = $("#quantityLightBlue option:selected").val();
		};
		console.log(cart);
		localStorage.setItem('cart', JSON.stringify(cart));
	});
	
	$("#cartPink").click(function() {
		cart = JSON.parse(localStorage.getItem('cart'));
		if($("#sizePink option:selected").text() == "Small") {
			cart.pink.small = $("#quantityPink option:selected").val();
		}
		else if($("#sizePink option:selected").text() == "Medium") {
			cart.pink.medium = $("#quantityPink option:selected").val();
		}
		else if($("#sizePink option:selected").text() == "Large") {
			cart.pink.large = $("#quantityPink option:selected").val();
		}
		else if($("#sizePink option:selected").text() == "XLarge") {
			cart.pink.xlarge = $("#quantityPink option:selected").val();
		};
		console.log(cart);
		localStorage.setItem('cart', JSON.stringify(cart));
	});
	
	$("#cartWhiteThunder").click(function() {
		cart = JSON.parse(localStorage.getItem('cart'));
		if($("#sizeWhiteThunder option:selected").text() == "Small") {
			cart.whiteThunder.small = $("#quantityWhiteThunder option:selected").val();
		}
		else if($("#sizeWhiteThunder option:selected").text() == "Medium") {
			cart.whiteThunder.medium = $("#quantityWhiteThunder option:selected").val();
		}
		else if($("#sizeWhiteThunder option:selected").text() == "Large") {
			cart.whiteThunder.large = $("#quantityWhiteThunder option:selected").val();
		}
		else if($("#sizeWhiteThunder option:selected").text() == "XLarge") {
			cart.whiteThunder.xlarge = $("#quantityWhiteThunder option:selected").val();
		};
		console.log(cart);
		localStorage.setItem('cart', JSON.stringify(cart));
	});
	
	$("#cartStripeDrama").click(function() {
		cart = JSON.parse(localStorage.getItem('cart'));
		if($("#sizeStripeDrama option:selected").text() == "Small") {
			cart.stripeDrama.small = $("#quantityStripeDrama option:selected").val();
		}
		else if($("#sizeStripeDrama option:selected").text() == "Medium") {
			cart.stripeDrama.medium = $("#quantityStripeDrama option:selected").val();
		}
		else if($("#sizeStripeDrama option:selected").text() == "Large") {
			cart.stripeDrama.large = $("#quantityStripeDrama option:selected").val();
		}
		else if($("#sizeStripeDrama option:selected").text() == "XLarge") {
			cart.stripeDrama.xlarge = $("#quantityStripeDrama option:selected").val();
		};
		console.log(cart);
		localStorage.setItem('cart', JSON.stringify(cart));
	});
	
	$("#cartYellowDrama").click(function() {
		cart = JSON.parse(localStorage.getItem('cart'));
		if($("#sizeYellowDrama option:selected").text() == "Small") {
			cart.yellowDrama.small = $("#quantityYellowDrama option:selected").val();
		}
		else if($("#sizeYellowDrama option:selected").text() == "Medium") {
			cart.yellowDrama.medium = $("#quantityYellowDrama option:selected").val();
		}
		else if($("#sizeYellowDrama option:selected").text() == "Large") {
			cart.yellowDrama.large = $("#quantityYellowDrama option:selected").val();
		}
		else if($("#sizeYellowDrama option:selected").text() == "XLarge") {
			cart.yellowDrama.xlarge = $("#quantityYellowDrama option:selected").val();
		};
		console.log(cart);
		localStorage.setItem('cart', JSON.stringify(cart));
	});
	
	$("#clear").click(function() {
		cart = JSON.parse(localStorage.getItem('cart'));
		cart = { 'blueTell': {}, 'creamHappy': {}, 'lightBlueThunder': {}, 'pink': {},
				 'whiteThunder': {}, 'stripeDrama': {}, 'yellowDrama': {}};
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
