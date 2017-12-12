$(function(){
	
    $(".headertwo").click(function(){
        $(this).addClass('heactive').siblings().removeClass("heactive");
        $(".balance").eq($(this).index()).show().siblings("div").hide();
    });
})