
$(function(){
    $("#footer").load("../public/tabs.html");
    //—————————————————————头部导航栏的切换事件—————————————————————————————————
    $(".navtop2>.swiper-slide").click(function(){
        $(this).addClass('swactive').siblings().removeClass("swactive");
//      $(".content").eq($(this).index()).show().siblings("div").hide();
    })
    //—————————————————————左边导航栏的切换事件—————————————————————————————————
    $(".navleft2>.swiper-slide").click(function(){
        $(this).addClass('coactive').siblings().removeClass("coactive");
        $(".content").eq($(this).index()).show().siblings("div").hide();
    });

    //———————————————————手指滑动事件开始———————————————————
    $(".banarrow_box").on("click",function(){
        $(".manager").animate({"margin-left":"0%"},400);
        $(".swiperbox").fadeIn();
        $(".banarrow_box").hide();
    });
    $(".swiperbox").on("click",function(){
        $(".manager").animate({"margin-left":"-57%"},400);
        $(".swiperbox").fadeOut();
        $(".banarrow_box").show();
    });


    //默认加载一级标题
    $.ajax({
        type:"post",
        url:"http://dz.tx178178.com/index.php?m=api&c=goods&a=goods",
        dataType:"json",
        data:{
            num:1
        },
        success:function(data){
            for(var i=0;i<data.length;i++){
                $(".navtop2").append('<div class="swiper-slide"><div>'+data[i].title+'</div></div>');
            };
        }});
    //默认加载二级标题
    $.ajax({
        type:"post",
        url:"http://dz.tx178178.com/index.php?m=api&c=goods&a=goods",
        dataType:"json",
        data:{
            num:1
        },
        success:function(data){
            for (var v = 0; v < data[0].contenta.length; v++) {

                var list2=$('<div class="swiper-slide" style="height: 18.4545px; margin-bottom: 30px;">'+data[0].contenta[v].title+'</div>');
                $("#title2").append(list2);
            }
            $("#title2").append('<div class="swiper-slide" style="height: 18.4545px; margin-bottom: 30px;"></div><div class="swiper-slide" style="height: 18.4545px; margin-bottom: 30px;"></div>');

        }});
    //默认加载三级标题
    $.ajax({
        type:"post",
        url:"http://dz.tx178178.com/index.php?m=api&c=goods&a=goods",
        dataType:"json",
        data:{
            num:1
        },
        success:function(data){
            $("#title3").html("");
            for (var k = 0; k < data[0].contenta[0].contenta.length; k++) {
                //console.log(k);
                var lis=$('<li>'+data[0].contenta[0].contenta[k].title+'</li>');
                $("#title3").append(lis);

            }
            $("#title3").append('<li></li>');
        }});
    //默认商品部分
    $.ajax({
        url:"http://dz.tx178178.com/index.php?m=api&c=GoodsClass&a=goodsClass",
        type:"get",
        dataType:"json",
        data:{
            id:4
        },
        success:function(data){
            $("#goodsbox").html("");
            //console.log(data);
            for (var l = 0; l < data.length; l++) {
                var goods=$('<a href="../views/company.html?id='+data[l].goods_id+'"><div class="content" style="display: block;"><div class="content_list flex_items"><img style="width:30%" class="content_img" src="'+data[l].img+'" alt="" /><div class="content_right flex_column3"><p class="content_title">'+data[l].goods_name+'</p><p class="content_text" style="height: 36px;overflow: hidden">'+data[l].goods_intro+'</p><p class="content_text"><span class="color1">'+data[l].price+'</span>元起</p></div></div></a></div>');
                $("#goodsbox").append(goods);
                console.log($("#goodsbox"));

            }
        }});


    //三级标题对应的id
   $("body").ready(function(){
       var a= 0,b= 0,c=0;
       console.log(a);
       $(".navtop>.navtop2>.swiper-slide>div").on("click",function(){
           console.log(a);
           for (var j = 0; j < data.length; j++) {
               if(data[j].title==$(this).text()){
                   //console.log(j);
                   a=j;
                   console.log(a);
               }}});










   })







})