/**
 * Created by Administrator on 2017/11/29 0029.
 */
$("body").ready(function(){
    $(".spreadbottom>li").eq(1).on("click",function(){
        console.log(3);
        window.location.href='myfans.html';
    });
    $(".spreadbottom>li").eq(0).on("click",function(){
        console.log(3);
        window.location.href='myjunior.html';
    });
});
