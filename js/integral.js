/**
 * Created by Administrator on 2017/12/16 0016.
 */
$(function(){
	    $.ajax({
	        url:"http://dz.tx178178.com/index.php?m=api&c=IntegralMall&a=integralList",
	        type:"get",
	        dataType:"json",
	        success:function(data){
				console.log(data)				
				var htmltab=""
				for(var i=0;i<data.length;i++){
					var htmltab=htmltab+'<div class="swiper-slide" index="'+data[i].integral_class_id+'">注册公司</div>'				
				}
				$(".swiper-wrapper.navleft2").html(htmltab)			
				$(".swiper-slide").eq(0).addClass("coactive")				
				var lists=data[0].list
				html(lists)
	            var swiper2 = new Swiper('.navleft', {
	                pagination: '.navleft4',
	                direction: 'vertical',
	                slidesPerView: 12,
	                paginationClickable: true,
	                spaceBetween: 20,
	                mousewheelControl: true
	            });				
	        }
	    }) 
	    
	    
	    $(".navleft2").delegate(".swiper-slide","click",function(){
	    	var id=$(this).attr("index")
		    $.ajax({
		        url:"http://dz.tx178178.com/index.php?m=api&c=IntegralMall&a=integralGoods",
		        type:"get",
		        dataType:"json",
		        data:{
		        	id:id 
		        },
		        success:function(data){
		        	console.log(data)
					html(data)	
		        }
		    })	    	
	    })

//点击样式
	$(".navleft2").delegate(".swiper-slide","click",function(){
		$(this).addClass("coactive").siblings().removeClass("coactive")		
	})

	    
})


function html(lists){
	if(lists!=0){		
		var htmltab=""
		var html=''		
		for (var i=0;i<lists.length;i++) {									
			var html=html+  '<div class="conbox">'+
				                '<a href="../views/company_zhuce.html">'+
				                    '<div class="content" style="display: block;">'+
				                        '<div class="content_list flex_items">'+
				                            '<img class="content_img" src="'+lists[i].goods_img+'" alt="" />'+
				                            '<div class="content_right flex_column3">'+
				                                '<p class="content_title">'+lists[i].goods_name+'</p>'+
				                                '<p class="content_text conname">'+lists[i].goods_intro+'</p>'+
				                                '<p class="content_text"><span class="color1">'+lists[i].integral+'</span>积分起</p>'+
				                           ' </div>'+
				                        '</div>'+
				                    '</div>'+
				                '</a>'+
				            '</div>'
		}
		$(".contentnav").html(html)		
	}else{
		$(".contentnav").html("")		
	}

}
