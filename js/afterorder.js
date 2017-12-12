$(function(){
	
    $(".headertwo").click(function(){
        $(this).addClass('heactive').siblings().removeClass("heactive");
        $(".watch").eq($(this).index()).show().siblings("div").hide();
    });
})