$(document).ready(function(){
	$(".anime-s").hover(function(){
		
		$(".manga-s").animate({
			width :'24%'
		});
		$(this).animate({
			width :'76%'
		});
		},function(){
		$(this).animate({
			width :'50%'
		});
		$(".manga-s").animate({
			width :'50%'
		});
	});
});