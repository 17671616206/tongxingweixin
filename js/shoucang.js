$(function(){
    var user_id=localStorage.getItem("user_id");
    $.ajax({
        url:"http://dz.tx178178.com/index.php?m=api&c=User&a=collecGoods",
        type:"get",
        dataType:"json",
        data:{
            id:user_id
        },
        success:function(data){
            if(data!=="0"){
                //console.log(1);
                for (var i = 0; i < data.length; i++) {
                    var lis=$('<div class="watch flex_between"><a href="company.html?goods_id='+data[i].goods_id+'" style="color:#6D6D6D;list-style: none"><div class="watchleft flex_items"><img class="watchimg" src="'+data[i].img+'" alt="" /><div><p class="font2">'+data[i].goods_name+'</p><div class="content" style="max-height: 57px;overflow: hidden">'+data[i].goods_intro+'</div><div class="watchright2"><span class="font1">'+data[i].price+'</span>元起</div></div></div></a><div class="watchright"><span class="icon iconfont icon-shanchu"></span></div></div>');
                    $(".contain").append(lis);

                }
                $(".icon-shanchu").on("click",function(){
                    var goodsname=$(this).parent().siblings().find('p').text();
                    for (var j = 0; j < data.length; j++) {
                        if(data[j].goods_name==goodsname){
                            //获取到商品ID
                            var goods_id=data[j].goods_id;
                            //调用取消收藏接口
                            $.ajax({
                                url:"http://dz.tx178178.com/index.php?m=api&c=GoodsInfo1&a=goodsCollection",
                                type:"get",
                                dataType:"json",
                                data:{
                                    user:user_id,
                                    goods:goods_id,
                                    type:1,
                                    num:0
                                },
                                success:function(data){
                                    window.location.href='shoucang.html';
                                }
                            })
                        }

                    }
                });




            }else{
                //console.log(2);
                $(".kong").css("display","block");
                $(".contain").css("display","none");
            }
        }
    });

    //取消全部收藏
    $("#delall").on("click",function(){
        $.ajax({
            url:"http://dz.tx178178.com/index.php?m=api&c=User&a=delCollect",
            type:"get",
            dataType:"json",
            data:{
                id:user_id
            },
            success:function(data){
                if(data==1){
                    window.location.href='shoucang.html';
                }

            }
        })
    });


});



