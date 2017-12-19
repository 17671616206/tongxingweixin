$(function(){
	
    $(".headerone").click(function(){
    	$(".headertwo").css({"color":"#7C7C7C"});
    	$(".headerone").css({"color":"#288CCA"});
    	$(".heactive").animate({left:"2%"},400);
		//$(".coupon").show();
		//$(".kong").hide();
		type=1;
		page=1;
		$(".coupon").html("");
		get(type,page);
    });
    $(".headertwo").click(function(){
    	$(".headerone").css({"color":"#7C7C7C"});
    	$(".headertwo").css({"color":"#288CCA"});
    	$(".heactive").animate({left:"50%"},400);
		//$(".coupon").hide();
		//$(".kong").show();
		type=2;
		page=1;
		$(".coupon").html("");
		get(type,page);
    });
});


//$("body").ready(function(){
	var pageall;
	var user_id=localStorage.getItem("user_id");
	var type=1;
	var page=1;
	get(type);
	function get(type){
	$.ajax({
		url:"http://dz.tx178178.com/index.php?m=api&c=User&a=UserCoupon",
		type:"post",
		dataType:"json",
		data:{
			id:user_id,
			type:type,
			page:page
		},
		success:function(data){
			pageall=data.num;
			console.log(type);
			if(data.length=="0"){
				$(".kong").css("display","none");
				$(".coupon").css("display","block");
				return false;
			}else{
			if(data==0){
				if(page=="1"){
				$(".kong").css("display","block");
				$(".coupon").css("display","none");}
			}else{
				$(".kong").css("display","none");
				$(".coupon").css("display","block");
				for (var i = 0; i < data.list.length; i++) {
					var lis=$('<div class="couponlist"><a href="../views/coupon-detial.html" class="cleft"><img src="'+data.list[i].img+'"></a><div class="cright"><p>'+data.list[i].name+'</p><div class="flex_between mancunpon"><div>满'+data.list[i].conditions+'可使用</div></div><p>'+data.list[i].lost+'</p></div></div>');
					$(".coupon").append(lis);
				}}
			}

		}
	})}
//});



//监听  懒加载
//console.log($(".coupon").height());
setTimeout(function(){
	var h=$(".coupon").height();
	setInterval(function(){
		if(h-$(window).scrollTop()<740){
			console.log(2333);
			if(page<pageall){
				page+=1;
				get(type,page);
			}

		}
	},800);
},1000);
