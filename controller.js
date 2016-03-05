$(document).ready(function(){
	$(".serie-section").hover(function(){
		//var whoverthis=$(this).css("width").split("p")[0]; /*width actual del escogido*/
		/*Set inicial*/
		var es = $(this); /*objeto escogido*/
		var init = 160; /*width original*/
		var whover = 250; /*width del hover*/
		var hnhover = 70; /*widht del no hover*/
		var shover = init;
		var nhover = init;
		var idhover = setInterval(function(){
			if(shover>=whover){
				clearInterval(idhover);
			}else{
				shover++;
				nhover--;
				es.css('width',shover + "px");
				if (es.hasClass("anime-s")){
					es.next().css("width",nhover + "px");
				}else if (es.hasClass("manga-s")){
					es.prev().css("width",nhover + "px");
				}
			}
		},300)

	},function(){
		/*Set inicial*/
		var es = $(this); /*objeto escogido*/
		var init = 160; /*width original*/
		var whover = 250; /*width del hover*/
		var hnhover = 70; /*widht del no hover*/
		var shover = whover;
		var nhover = hnhover;
		var idnhover = setInterval(function(){
			if(shover<=init){
				clearInterval(idnhover);
			}else{
				shover--;
				nhover++;
				es.css('width',shover + "px");
				if (es.hasClass("anime-s")){
					es.next().css("width",nhover + "px");
					console.log(nhover)
				}else if (es.hasClass("manga-s")){
					es.prev().css("width",nhover + "px");
				}
			}
		},300)
	});
	
});