$(document).ready(function(){
	
	$(".item").hover(function(){
		$(this).find("img").css("opacity", "0.3");
		$(this).find(".price").css("display", "block");
		}, function(){
		$(this).find("img").css("opacity", "1")
		$(this).find(".price").css("display", "none");

    });
	
	$(".price>a").hover(function(){
		$(this).css("opacity", "1");
		$(this).parent("div").siblings("img").css("opacity", "1");
		$(".price>p").css("background-color", "white");
		}, function(){
		$(this).css("opacity", "0.5")
		$(this).parent("div").siblings("img").css("opacity", "0.3");
		$(".price>p").css("background-color", "transparent");
    });
});


/*
$(document).ready(function(){
	
	$(".item").hover(function(){
		$(this).find("img").css("opacity", "0.3")
		$(this).find(".price").css("display", "block");
		}, function(){
		$(this).find("img").css("opacity", "1")
		$(this).find(".price").css("display", "none");

    });
	
	$(".price>a").hover(function(){
		$(this).css("opacity", "1")
		$(".item>img").css("opacity", "1");
		$(".price>p").css("background-color", "white");
		}, function(){
		$(this).css("opacity", "0.5")
		$(".item>img").css("opacity", "0.3");
		$(".price>p").css("background-color", "transparent");
    });
});
*/