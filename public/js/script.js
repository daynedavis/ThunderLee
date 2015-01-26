if (localStorage.getItem("cart") === null) {
	var cart = { 'blueTell': {'small':0, 'medium':0, 'large':0, 'xlarge':0},
				 'creamHappy': {'small':0, 'medium':0, 'large':0, 'xlarge':0},
				 'lightBlueThunder': {'small':0, 'medium':0, 'large':0, 'xlarge':0},
				 'pink': {'small':0, 'medium':0, 'large':0, 'xlarge':0},
				 'whiteThunder': {'small':0, 'medium':0, 'large':0, 'xlarge':0},
				 'stripeDrama': {'small':0, 'medium':0, 'large':0, 'xlarge':0},
				 'yellowDrama': {'small':0, 'medium':0, 'large':0, 'xlarge':0}};
	localStorage.setItem('cart', JSON.stringify(cart));
}
else {
	var cart = JSON.parse(localStorage.getItem('cart'));
}

$(document).ready(function() {

	$('.footer').html('&copy; Thunder Lee');

	// Toggles pictures on Blue Tell Me about it
	$("#smallBlueTell1").click(function() {
		$("#bigBlueTell").attr('src', '../img/blueTell.png');
	});
	$("#smallBlueTell2").click(function() {
		$("#bigBlueTell").attr('src', '../img/blueTell2.png');
	});

	// Toggles pictures on Yellow Drama
	$("#smallYellowDrama1").click(function() {
		$("#bigYellowDrama").attr('src', '../img/yellowDrama2.png');
	});
	$("#smallYellowDrama2").click(function() {
		$("#bigYellowDrama").attr('src', '../img/yellowDrama.png');
	});

	// Toggles pictures on Light Blue Thunder Lee
	$("#smallLightBlue1").click(function() {
		$("#bigLightBlue").attr('src', '../img/lightBlueThunder.png');
	});
	$("#smallLightBlue2").click(function() {
		$("#bigLightBlue").attr('src', '../img/lightBlueThunder2.png');
	});

	// Toggles pictures on Cream Happy Sad
	$("#smallCreamHappy1").click(function() {
		$("#bigCreamHappy").attr('src', '../img/creamHappy2.png');
	});
	$("#smallCreamHappy2").click(function() {
		$("#bigCreamHappy").attr('src', '../img/creamHappy1.png');
	});

	// fades out pictures for added fx
	$(".third, .myButton, #featured, .small").hover(function() {
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
		}
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
			cart.creamHappy.large = $("#quantityCreamHappy option:selected").val();
		}
		else if($("#sizeCreamHappy option:selected").text() == "XLarge") {
			cart.creamHappy.xlarge = $("#quantityCreamHappy option:selected").val();
		}
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
		}
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
		}
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
		}
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
		}
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
		}
		localStorage.setItem('cart', JSON.stringify(cart));
	});

	//to notify them their item as been added
	$(".myButton").click(function () {
		$("#added").show().delay(1000).fadeOut();
	});

	$("#clear").click(function() {
		cart = JSON.parse(localStorage.getItem('cart'));
		cart = { 'blueTell': {'small':0, 'medium':0, 'large':0, 'xlarge':0},
				 'creamHappy': {'small':0, 'medium':0, 'large':0, 'xlarge':0},
				 'lightBlueThunder': {'small':0, 'medium':0, 'large':0, 'xlarge':0},
				 'pink': {'small':0, 'medium':0, 'large':0, 'xlarge':0},
				 'whiteThunder': {'small':0, 'medium':0, 'large':0, 'xlarge':0},
				 'stripeDrama': {'small':0, 'medium':0, 'large':0, 'xlarge':0},
				 'yellowDrama': {'small':0, 'medium':0, 'large':0, 'xlarge':0}};
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
