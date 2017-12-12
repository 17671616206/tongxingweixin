/**
 * Created by Administrator on 2017/11/14 0014.
 */
$(function(){
    $("#footer").load("../public/tabs.html");
});


//ËÑË÷¿òËÑË÷
$("body").ready(function(){
    $(".icon-search").on("click",function(){
        var searchtext=$('.header_inp').val();
        window.location.href='../home/search.html?text='+searchtext+'';
    })
})




