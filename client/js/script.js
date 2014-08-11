// Toggles pictures on the clothing pages

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
		
	$(".page-third, #banner, #featured").hover(function(){
		$(this).fadeTo("fast", .5);
		}, function(){
			$(this).fadeTo("fast", 1)});
});