$(document).ready(function(){

	$(".serie-section").hover(function(){
		var escogido=$(this);
			if(escogido.hasClass("anime-s")){
				var noescogido=$(this).next();
				var id = setInterval(framein,15);
				var tescogido=49;
				var tnoescogido=49;
				function framein(){
					if(tescogido == 70){
						clearInterval(id);
					}else{
						tescogido++;
						tnoescogido--;
						pxescogido=tescogido + '%';
						pxnoescogido=tnoescogido + '%';
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
				var id = setInterval(framein,15);
				var tescogido=49;
				var tnoescogido=49;
				function framein(){
					if(tescogido == 70){
						clearInterval(id);
					}else{
						tescogido++;
						tnoescogido--;
						pxescogido=tescogido + '%';
						pxnoescogido=tnoescogido + '%';
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

			var escogido=$(this);
		if(escogido.hasClass("anime-s")){
			var noescogido=$(this).next();
			var id = setInterval(frameout,15);
			var tescogido=70;
			var tnoescogido=20;
			function frameout(){
				if(tescogido == 49){
					clearInterval(id);
				}else{
					tescogido--;
					tnoescogido++;
					pxescogido=tescogido + '%';
					pxnoescogido=tnoescogido + '%';
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
			var id = setInterval(frameout,15);
			var tescogido=70;
			var tnoescogido=20;
			function frameout(){
				if(tescogido == 49){
					clearInterval(id);
				}else{
					tescogido--;
					tnoescogido++;
					pxescogido=tescogido + '%';
					pxnoescogido=tnoescogido + '%';
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