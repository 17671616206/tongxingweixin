$(function(){
    $(".header>li").click(function(){
        $(this).addClass('weactive').siblings().removeClass("weactive");
        $(".content").eq($(this).index()).show().siblings("div").hide();
    })
})
