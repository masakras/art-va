$(document).ready(function(){
	$('.menu').click(function(){
		$('.menu ul').animate({"opacity": "toggle"},
			{ duration: "normal"});
		});
	});
