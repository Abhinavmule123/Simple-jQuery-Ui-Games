$(document).ready(function(){
	$("#start").click(function(){
		$(".first-container img").draggable({
			revert:"invalid",
			helper:"clone",
		});
		timer();
	});
	$(".second-container .one").droppable({
		accept:"#one",
		drop:function(event,ui){
		let imgPath = $(ui.draggable)[0].src;
			$(ui.draggable).remove();
			$(".second-container .one").css("background-image","url("+imgPath+")");
			 checkComplete();

		}
	});
	$(".second-container .two").droppable({
		accept:"#two",
		drop:function(event,ui){
			let imgPath = $(ui.draggable)[0].src;
			$(ui.draggable).remove();
			$(".second-container .two").css("background-image","url("+imgPath+")");
			 checkComplete();

		}
	});
	$(".second-container .three").droppable({
		accept:"#three",
		drop:function(event,ui){
			let imgPath = $(ui.draggable)[0].src;
			$(ui.draggable).remove();
			$(".second-container .three").css("background-image","url("+imgPath+")");
			 checkComplete();

		}
	});
	$(".second-container .four").droppable({
		accept:"#four",
		drop:function(event,ui){
			let imgPath = $(ui.draggable)[0].src;
			$(ui.draggable).remove();
			$(".second-container .four").css("background-image","url("+imgPath+")");
			 checkComplete();

		}
	});
	$(".second-container .five").droppable({
		accept:"#five",
		drop:function(event,ui){
			let imgPath = $(ui.draggable)[0].src;
			$(ui.draggable).remove();
			$(".second-container .five").css("background-image","url("+imgPath+")");
			 checkComplete();

		}
	});
	$(".second-container .six").droppable({
		accept:"#six",
		drop:function(event,ui){
			let imgPath = $(ui.draggable)[0].src;
			$(ui.draggable).remove();
			$(".second-container .six").css("background-image","url("+imgPath+")");
			 checkComplete();

		}
	});
	let clear;
	function checkComplete(){
		let x = $(".first-container")[0].childNodes.length;
		if(x==8){
			clearInterval(clear);
			$(".wining-message").fadeIn(500);
		}
	}
	checkComplete();
	$("#play-again").click(function(){
		window.location = location.href;
	});

	const timer = ()=>{
		let i = 10 ;
	 clear=setInterval(function(){
		i--;
		if(i==0){
			clearInterval(clear);
			$(".wining-message h1").html("You Lost !");
			$(".wining-message").fadeIn(500);
		}
		$("#timer").html("Time : "+"00:"+i+" s");

		},1000)
	};
});