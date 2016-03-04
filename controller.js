$(document).ready(function(){

	$(".serie-section").hover(function(){
		var escogido=$(this);
		var thover=140;
		var tnhover=67;
		var original=104;
		if(escogido.hasClass("anime-s")){
			var noescogido=$(this).next();
			var tescogido=escogido.css("width").split("p")[0];
			var tnoescogido=noescogido.css("width").split("p")[0];
			var idizquierdo = setInterval(framein,8);
			function framein(){
				if(tescogido == thover){
						clearInterval(idizquierdo);
					}else{
						tescogido++;
						tnoescogido--;
						pxescogido=tescogido + 'px';
						pxnoescogido=tnoescogido + 'px';
						escogido.css('width', pxescogido);
						noescogido.css('width',pxnoescogido);
					}
				}
				//escogido.css('width','70%');
				//noescogido.css('width','20%')
				//noescogido.animate({
				//	width:"20%"
				//})
				//escogido.animate({
				//	width:"70%"
				//})
			}else if(escogido.hasClass("manga-s")){
				noescogido=$(this).prev();
				var idderecho = setInterval(framein,8);
				var tescogido=escogido.css("width").split("p")[0];
				var tnoescogido=noescogido.css("width").split("p")[0];
				function framein(){
					if(tescogido == thover){
						clearInterval(idderecho);
					}else{
						tescogido++;
						tnoescogido--;
						pxescogido=tescogido + 'px';
						pxnoescogido=tnoescogido + "px";
						escogido.css('width', pxescogido);
						noescogido.css('width',pxnoescogido);
					}
				}
				//escogido.css('width','70%');
				//noescogido.css('width','20%')
				//noescogido.animate({
				//	width:"20%"
				//})
				//escogido.animate({
				//	width:"70%"
				//})
			}
	},function(){
		var thover=140;
		var tnhover=67;
		var original=104;
		var escogido=$(this);
		if(escogido.hasClass("anime-s")){
			var noescogido=$(this).next();
			var id = setInterval(frameout,8);
			var tescogido=escogido.css("width").split("p")[0];
			var tnoescogido=noescogido.css("width").split("p")[0];
			function frameout(){
				if(tescogido == original){
					clearInterval(id);
				}else{
					tescogido--;
					tnoescogido++;
					pxescogido=tescogido + 'px';
					pxnoescogido=tnoescogido + 'px';
					escogido.css('width', pxescogido);
					noescogido.css('width',pxnoescogido);
				}
			}
			//escogido.css('width','49%');
			//noescogido.css('width','49%')
			//noescogido.animate({
			//	width:"49%"
			//})
			//escogido.animate({
			//	width:"49%"
			//})
		}else if(escogido.hasClass("manga-s")){
			var noescogido=$(this).prev();
			var id = setInterval(frameout,8);
			var tescogido=escogido.css("width").split("p")[0];
			var tnoescogido=noescogido.css("width").split("p")[0];
			function frameout(){
				if(tescogido == original){
					clearInterval(id);
				}else{
					tescogido--;
					tnoescogido++;
					pxescogido=tescogido + 'px';
					pxnoescogido=tnoescogido + 'px';
					escogido.css('width', pxescogido);
					noescogido.css('width',pxnoescogido);
				}
			}
				//escogido.css('width','70%');
				//noescogido.css('width','20%')
				//noescogido.animate({
				//	width:"20%"
				//})
				//escogido.animate({
				//	width:"70%"
				//})
			}
	});
});