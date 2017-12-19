$(function(){
	//————————对勾的选择点击事件——————————
	var card = $(".card");


	$(".footright").click(function(){
		$(".fukuan").fadeIn();
	});
	$(".fukuan_confirm").click(function(){
		$(".fukuan").fadeOut();
	})

	//—————————选择优惠券部分———————————
	$(".ordersele").click(function(){
		$(".orderbomb").fadeIn();
	})
	var bombli = $(".orbombox>li")
	for(var i = 0;i<bombli.length;i++){
		bombli.eq(i).click(function(){
			//alert($(this).index())
			$(".orderbomb").fadeOut();
		})
	}

});

$("body").ready(function(){
	var user_id=localStorage.getItem("user_id");
	//获取个人账户信息
	var id=localStorage.getItem("id");
	if(id){
		$(".ordername>div").eq(1).text(id);
			$.ajax({
				url:"http://dz.tx178178.com/index.php?m=api&c=User&a=userAccount",
				type:"post",
				dataType:"json",
				data:{
					user_id:user_id
				},
				success:function(data){
					$(".orderphone>div").eq(1).text(data.phone);
				}
			})
	}else{
		window.location.href='login.html';
	}
});

