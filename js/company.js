/**
 * Created by Administrator on 2017/12/4 0004.
 */
$(function(){

    //点击收藏爱心
    //var off = false;
    //$(".shoucang").click(function(){
    //    if(off == false){
    //        $(".shoucang").removeClass("icon-aixin1");
    //        $(".shoucang").addClass("icon-aixin2");
    //        off = true;
    //    }else{
    //        $(".shoucang").removeClass("icon-aixin2");
    //        $(".shoucang").addClass("icon-aixin1");
    //        off = false;
    //    }
    //})

    $(".shoucang").click(function(){
        var user_id=localStorage.getItem("user_id");
        if(user_id){
            if($(".shoucang").hasClass("icon-aixin1")){
                //console.log(1);
                num=1;
            }else{
                //console.log(2);
                num=0;
            }
        }else{
            window.location.href='login.html?href='+window.location.href+'';
        }
    });
    function add(){
        $.ajax({
            url:"http://dz.tx178178.com/index.php?m=api&c=GoodsInfo1&a=goodsCollection",
            type:"post",
            dataType:"json",
            data:{
                user:user_id,
                goods:goods,
                type:0,
                num:num
            },
            success:function(data){
                if(data.state==1){
                    if(num==1){
                        $(".shoucang").removeClass("icon-aixin1");
                        $(".shoucang").addClass("icon-aixin2");
                    }else{
                        $(".shoucang").removeClass("icon-aixin2");
                        $(".shoucang").addClass("icon-aixin1");
                    }
                }
            }
        })
    }

    //————————————点击组合套餐————————————
    var group = false;
    $(".cbgroup1").click(function(){
        if(group == false){
            $(".icon-arrowright").css({"transform":"rotate(90deg)"})
            $(".myul").removeClass("groupul").addClass("groupul2");
            group=true;
        }else{
            $(".icon-arrowright").css({"transform":"rotate(0deg)"})
            $(".myul").removeClass("groupul").addClass("groupul");
            group = false;
        }

    })
    
    //规格，详情，评论切换部分JS
    $(".classifi>li").click(function(){
        $(this).addClass('comactive').siblings().removeClass("comactive");
        $(".company").eq($(this).index()).show().siblings("div").hide();
    });
	
	//—————————服务年限和服务形式切换———————————
	$(".guigeul>li").click(function(){
        $(this).addClass('guigeactive').siblings().removeClass("guigeactive");
//      $(".unpaid").eq($(this).index()).show().siblings("div").hide();
    });
    
    //———————注册地址切换———————
    $(".address1").click(function(){
    	$(".address1").addClass("guigeactive");
    	$(".address2").removeClass("guigeactive");
    	$(".addressbox").show();
    })
	$(".address2").click(function(){
    	$(".address2").addClass("guigeactive");
    	$(".address1").removeClass("guigeactive");
    	$(".addressbox").hide();
    })

})


