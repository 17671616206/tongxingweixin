/**
 * Created by Administrator on 2017/11/30 0030.
 */
$(function(){

    $(".headerone").click(function(){
        $(".headertwo").css({"color":"#7C7C7C"});
        $(".headerone").css({"color":"#288CCA"});
        $(".heactive").animate({left:"2%"},400);
        $(".fansone").show();
        $(".fanstwo").hide();
    });
    $(".headertwo").click(function(){
        $(".headerone").css({"color":"#7C7C7C"});
        $(".headertwo").css({"color":"#288CCA"});
        $(".heactive").animate({left:"50%"},400);
        $(".fansone").hide();
        $(".fanstwo").show();
    });

})
