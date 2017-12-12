$(function(){
	
    $(".headerone").click(function(){
    	$(".headertwo").css({"color":"#7C7C7C"});
    	$(".headerone").css({"color":"#288CCA"});
    	$(".heactive").animate({left:"2%"},400);
		$(".coupon").show();
		$(".kong").hide();
    });
    $(".headertwo").click(function(){
    	$(".headerone").css({"color":"#7C7C7C"});
    	$(".headertwo").css({"color":"#288CCA"});
    	$(".heactive").animate({left:"50%"},400);
		$(".coupon").hide();
		$(".kong").show();
    });
})