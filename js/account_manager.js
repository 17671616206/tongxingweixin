/**
 * Created by Administrator on 2017/11/30 0030.
 */
$(function(){
    $(".zhuce").click(function(){
        $(".bombbox").show();
    })
    $(".cancel").click(function(){
        $(".bombbox").hide();
    })

});


$("body").ready(function(){
    $(".ycontent>li").eq(1).on("click",function(){
        window.location.href='service_address.html';
    });

    var user_id=localStorage.getItem("user_id");
        $.ajax({
            url:"http://dz.tx178178.com/index.php?m=api&c=User&a=userPersonalInfo",
            type:"get",
            dataType:"json",
            data:{
                user_id:user_id
            },
            success:function(data){
                if(data.userimg){
                $(".touxiang").attr("src",data.userimg);
                }
            }});

    $(".ybanner").on("click",function(){
        window.location.href='admin.html';
    });

});


