$(function(){	
    $(".headertwo").click(function(){
        $(this).addClass('heactive').siblings().removeClass("heactive");
        $(".unpaid").eq($(this).index()).show().siblings("div").hide();
    });
    var user_id=localStorage.getItem("user_id");
    if(user_id){
	    $.ajax({
	        url:"http://dz.tx178178.com/index.php?m=api&c=User&a=orderCenter",
	        type:"post",
	        dataType:"json",
	        data:{
	            user_id:user_id,
	            panging:1        
	        },
	        success:function(data){
				html(data)
	        }
	    })     	
    }else{
    	alert("请登录")
    	location.href="../views/login.html"
    }
    
    
    $(".headernav li").click(function(){
    	var index=$(this).index()+1
    	console.log(index)
    	$.ajax({
	        url:"http://dz.tx178178.com/index.php?m=api&c=User&a=orderCenter",
	        type:"post",
	        dataType:"json",
	        data:{
	            user_id:user_id,
	            panging:index       
	        },
	        success:function(data){
	        	console.log(data)
				html(data)
	        }
    	})
    })
 
    
})


function html(data){
	if(data!=0){
		var html=""
    	for (var i=0;i<data.length;i++) {
    		var html=html+  '<div class="unpaidlist">'+
								'<div class="ordernum flex_between">'+
									'<span>订单号：'+data[i].ordernum+'</span>'+
									'<span class="daifu">'+data[i].status+'</span>'+
								'</div>'+
								'<div class="flex_items box_border">'+
									'<img class="contentimg" src="'+data[i].goodsimg+'" alt="" />'+
									'<div class="contentext">'+
										'<div class="cotitle">'+
											'<div class="name">'+data[i].goodsname+'</div>'+
										'</div>'+
										'<div class="neirong">'+data[i].goodsinfo+'</div>'+
									'</div>'+
								'</div>'+
								'<div class="flex_between footbox">'+
									'<div>'+
										'<span class="heji">合计：</span>'+
										'<span class="font3">'+data[i].price+'元</span>'+
									'</div>'+
									'<div class="flex_items">'+
										'<button class="btn btncancel">取消订单</button>'+
										'<button class="btn btnque">立即支付</button>'+
									'</div>'+
								'</div>'+
							'</div>'
    	}
    	$(".unpaid").html(html)
	}else{
		console.log("错误")
	}	
}
