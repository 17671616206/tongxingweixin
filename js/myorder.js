$(function(){
	
    $(".headertwo").click(function(){
        $(this).addClass('heactive').siblings().removeClass("heactive");
        $(".unpaid").eq($(this).index()).show().siblings("div").hide();
    });
})