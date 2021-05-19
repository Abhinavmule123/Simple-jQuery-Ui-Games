$(document).ready(function(){
	$("#start").click(function(){
		$(".container .boxes").draggable({
			revert:"invalid",
			helper:"clone",
		});
		timer();
	});
	$(".second-container .one").droppable({
		accept:"#one",
		drop:function(event,ui){
			$(ui.draggable).remove();
			$(".second-container .one").html("1");
			$(".second-container .one").addClass("change-box");
			$(".second-container .one").css("background-color","green");
			checkComplete();

		}
	});
	$(".second-container .two").droppable({
		accept:"#two",
		drop:function(event,ui){
			$(ui.draggable).remove();
			$(".second-container .two").html("2");
			$(".second-container .two").addClass("change-box");
			$(".second-container .two").css("background-color","brown");
			checkComplete();

		}
	});
	$(".second-container .three").droppable({
		accept:"#three",
		drop:function(event,ui){
			$(ui.draggable).remove();
			$(".second-container .three").html("3");
			$(".second-container .three").addClass("change-box");
			$(".second-container .three").css("background-color","cyan");
			checkComplete();

		}
	});
	$(".second-container .four").droppable({
		accept:"#four",
		drop:function(event,ui){
			$(ui.draggable).remove();
			$(".second-container .four").html("4");
			$(".second-container .four").addClass("change-box");
			$(".second-container .four").css("background-color","skyblue");
			checkComplete();

		}
	});
	$(".second-container .five").droppable({
		accept:"#five",
		drop:function(event,ui){
			$(ui.draggable).remove();
			$(".second-container .five").html("5");
			$(".second-container .five").addClass("change-box");
			$(".second-container .five").css("background-color","violet");
			checkComplete();

		}
	});
	$(".second-container .six").droppable({
		accept:"#six",
		drop:function(event,ui){
			$(ui.draggable).remove();
			$(".second-container .six").html("6");
			$(".second-container .six").addClass("change-box");
			$(".second-container .six").css("background-color","yellow");
			checkComplete();

		}
	});
	$(".second-container .seven").droppable({
		accept:"#seven",
		drop:function(event,ui){
			$(ui.draggable).remove();
			$(".second-container .seven").html("7");
			$(".second-container .seven").addClass("change-box");
			$(".second-container .seven").css("background-color","rgb(106, 34, 165)");
			checkComplete();

		}
	});
	$(".second-container .eight").droppable({
		accept:"#eight",
		drop:function(event,ui){
			$(ui.draggable).remove();
			$(".second-container .eight").html("8");
			$(".second-container .eight").addClass("change-box");
			$(".second-container .eight").css("background-color","purple");
			checkComplete();

		}
	});
	$(".second-container .nine").droppable({
		accept:"#nine",
		drop:function(event,ui){
			$(ui.draggable).remove();
			$(".second-container .nine").html("9");
			$(".second-container .nine").addClass("change-box");
			$(".second-container .nine").css("background-color","red");
			checkComplete();

		}
	});
	$(".second-container .ten").droppable({
		accept:"#ten",
		drop:function(event,ui){
			$(ui.draggable).remove();
			$(".second-container .ten").html("10");
			$(".second-container .ten").addClass("change-box");
			$(".second-container .ten").css("background-color","orange");
			checkComplete();
		}
	});
	let clear;
	function checkComplete(){
		let x = $(".container")[0].childNodes.length;
		if(x==12){
			clearInterval(clear);
			$(".wining-message").fadeIn(500);
		}
	}
	
	$("#play-again").click(function(){
		window.location = location.href;
	});

	const timer = ()=>{
		let i = 30 ;
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