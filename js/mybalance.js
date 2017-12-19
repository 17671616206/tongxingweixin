$(function(){
    var user_id=localStorage.getItem("user_id");
    var type=1;
    //默认样式
    $.ajax({
        url:"http://dz.tx178178.com/index.php?m=api&c=User&a=Balance",
        type:"post",
        dataType:"json",
        data:{
            id:user_id,
            type:1
        },
        success:function(data){
            if(data.length=="0"){
                $(".kong").eq($(this).index()).css("display","block");
            }else{
                $(".kong").eq($(this).index()).css("display","none");
                for (var i = 0; i < data.length; i++) {
                    if(data[i].price.split("+").length=="2"){
                        cost="充值ֵ";
                    }else{
                        cost="消费";
                    }
                    console.log(data[i].price.split("+"));
                    var lis=$('<div class="bsection"><div class="blistone flex_between"><div>时间</div><div class="tfont2">'+data[i].time+'</div></div><div class="blistone flex_between"><div>'+cost+'</div><div class="tfont2">'+data[i].price+'</div></div><div class="flex_between"><div>余额</div><div>+ <span class="bfont1">'+data[i].balance+'</span></div></div></div>');
                    $(".balance").eq(0).append(lis);

                }


            }
        }
    })
	
    $(".headertwo").click(function(){
        $(".balance").html("");
        var index=$(this).index();
        $(this).addClass('heactive').siblings().removeClass("heactive");
        $(".balance").eq($(this).index()).show().siblings("div").hide();
        type=index+1;
        //console.log(type);
        //调取数据
        $.ajax({
            url:"http://dz.tx178178.com/index.php?m=api&c=User&a=Balance",
            type:"post",
            dataType:"json",
            data:{
                id:user_id,
                type:type
            },
            success:function(data){
                if(data.length=="0"){
                    $(".kong").eq($(this).index()).css("display","block");
                }else{
                    $(".kong").eq($(this).index()).css("display","none");
                    for (var i = 0; i < data.length; i++) {
                       if(data[i].price.split("+").length=="2"){
                           cost="充值ֵ";
                       }else{
                           cost="消费";
                       }
                        console.log(data[i].price.split("+"));
                        var lis=$('<div class="bsection"><div class="blistone flex_between"><div>时间</div><div class="tfont2">'+data[i].time+'</div></div><div class="blistone flex_between"><div>'+cost+'</div><div class="tfont2">'+data[i].price+'</div></div><div class="flex_between"><div>余额</div><div>+ <span class="bfont1">'+data[i].balance+'</span></div></div></div>');
                        $(".balance").eq(index).append(lis);

                    }


                }
            }
        })







    });
})