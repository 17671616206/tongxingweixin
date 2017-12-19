$(function() {
	$("#pic").click(function () {
		$("#upload").click(); //隐藏了input:file样式后，点击头像就可以本地上传
		$("#upload").on("change",function(){
			var objUrl = getObjectURL(this.files[0]) ; //获取图片的路径，该路径不是图片在本地的路径
			var imgurl;
			function getBase64(img){//传入图片路径，返回base64
				function getBase64Image(img,width,height) {//width、height调用时传入具体像素值，控制大小 ,不传则默认图像大小
					var canvas = document.createElement("canvas");
					canvas.width = width ? width : img.width;
					canvas.height = height ? height : img.height;

					var ctx = canvas.getContext("2d");
					ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
					var dataURL = canvas.toDataURL();
					return dataURL;
				}
				var image = new Image();
				image.src = img;
				var deferred=$.Deferred();
				if(img){
					image.onload =function (){
						deferred.resolve(getBase64Image(image));//将base64传给done上传处理
					}
					return deferred.promise();//问题要让onload完成后再return sessionStorage['imgTest']
				}
			}
			getBase64(objUrl)
				.then(function(base64){
					//console.log(base64);
					imgurl=base64;
					var user_id=localStorage.getItem("user_id");
					logoimg(user_id,imgurl);
					//console.log(imgurl);
				},function(err){
					//console.log(err);
				});
			if (objUrl) {
				$("#pic").attr("src", objUrl) ; //将图片路径存入src中，显示出图片
			}
		});
	});
});

//建立一個可存取到該file的url
function getObjectURL(file) {
	var url = null ;
	if (window.createObjectURL!=undefined) { // basic
		url = window.createObjectURL(file) ;
	} else if (window.URL!=undefined) { // mozilla(firefox)
		url = window.URL.createObjectURL(file) ;
	} else if (window.webkitURL!=undefined) { // webkit or chrome
		url = window.webkitURL.createObjectURL(file) ;
	}
	return url ;
}


var user_id=localStorage.getItem("user_id");
if(user_id){
	$.ajax({
		url:"http://dz.tx178178.com/index.php?m=api&c=User&a=userPersonalInfo",
		type:"get",
		dataType:"json",
		data:{
			user_id:user_id
		},
		success:function(data){
			console.log(data);
			$("#pic").attr("src",data.userimg);
			$(".name").text(data.username);
			if(data.sex==0){
				$(".sex").text("保密男女");
			}else if(data.sex==1){
				$(".sex").text("男");
			}else if(data.sex==2){
				$(".sex").text("女");
			};
			$("#start_date").attr("placeholder",data.birthday);



		}
	});
	$.ajax({
		url:"http://dz.tx178178.com/index.php?m=api&c=User&a=userAccount",
		type:"get",
		dataType:"json",
		data:{
			id:user_id
		},
		success:function(data){
			$(".phone").text(data.phone);
		}
	});
	//上传图片
	function logoimg(user_id,userimg){
	$.ajax({
		url:"http://dz.tx178178.com/index.php?m=api&c=User&a=userInfoEdit",
		type:"post",
		dataType:"json",
		data:{
			user_id:user_id,
			userimg:userimg
		},
		success:function(data){
			//$(".phone").text(data.phone);
			console.log(2222);

		}
	})};


}


//setInterval(function(){
//	console.log(1);
//	console.log($("#start_date").val());
//},600)

//修改生日
var birthbay=$("#start_date").val();
setInterval(function(){
	if($("#start_date").val().length==10){
		birthbay=$("#start_date").val();
		$.ajax({
			url:"http://dz.tx178178.com/index.php?m=api&c=User&a=userInfoEdit",
			type:"post",
			dataType:"json",
			data:{
				user_id:user_id,
				birthbay:birthbay
			},
			success:function(data){
				//$(".phone").text(data.phone);
				console.log(2222);
				console.log(birthbay.length);

			}
		})
	}
},2000);