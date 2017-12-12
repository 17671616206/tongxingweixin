$(function(){
	//————————对勾的选择点击事件——————————
	var card = $(".card");
	for(var i = 0;i<card.length;i++){
		card.eq(i).click(function(){
			iconcheck($(this).index());
		})
	}

	function iconcheck (n){
		$(".duigoubox").find("img").hide();
		$(".duigoubox").eq(n).find("img").show();
	}

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

})
