/**
 * Created by Administrator on 2017/12/7 0007.
 */
$("body").ready(function(){
    console.log(22);
    setInterval(function(){
        if($(".Areaa").text()!=="请选择地区"){
            var place=$(".Provincee").text()+'-'+$(".cityy").text()+'-'+$(".Areaa").text();
            //console.log(place);
            window.location.href='address_add.html?place='+place+'';
        }
    },400);
});