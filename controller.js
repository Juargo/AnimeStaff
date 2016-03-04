$(document).ready(function(){
	$(".serie-section").hover(function(){
		//var whoverthis=$(this).css("width").split("p")[0]; /*width actual del escogido*/
		/*Set inicial*/
		var es = $(this); /*objeto escogido*/
		var init = 104; /*width original*/
		var whover = 140; /*width del hover*/
		var hnhover = 67; /*widht del no hover*/
		var shover = init;
		var nhover = init;
		var id = setInterval(function(){
			if(shover>=whover){
				clearInterval(id);
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
		},15)

	},function(){
		/*Set inicial*/
		var es = $(this); /*objeto escogido*/
		var init = 104; /*width original*/
		var whover = 140; /*width del hover*/
		var hnhover = 67; /*widht del no hover*/
		var shover = whover;
		var nhover = hnhover;
		var id = setInterval(function(){
			if(shover<=init){
				clearInterval(id);
			}else{
				shover--;
				nhover++;
				es.css('width',shover + "px");
				es.next().css("width",nhover + "px");
			}
		},15)
	});
	
});