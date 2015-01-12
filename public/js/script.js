
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
	$(".page-third, #featured, #small1, #small2, #small3").hover(function(){
		$(this).fadeTo("fast", .5);
		}, function(){
			$(this).fadeTo("fast", 1)});
});

function swapImages() {
	var $active = $('#banner .active');
	var $next = ($('#banner .active').next().length > 0) ? $('#banner .active').next() : $('#banner img:first');	
	
	$active.fadeOut(function(){
		
			$active.removeClass('active');
			$next.fadeTo("slow", 1).addClass('active');
	});
	
}	

setInterval('swapImages()', 5000);

