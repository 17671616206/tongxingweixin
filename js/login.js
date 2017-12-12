window.onload=function(){

    //获取登录之前的页面地址
    var href=window.location.search;
    console.log(href);
    //href= eval('(' + href + ')');
    if(href){
        href=href.split("=")[1];
    }

    //登陆
    $(".login_btn").on("click",function(){
        var id=$(".name_inp").eq(0).val();
        localStorage.setItem("id",id);
        var password=$(".name_inp").eq(1).val();
        $.ajax({
            url:"http://dz.tx178178.com/index.php?m=api&c=User&a=login",
            type:"post",
            dataType:"json",
            data:{
                username:id,
                password:password,
                href:href
            },
            success:function(data){
                if(data.state==1){
                    localStorage.setItem("salt_value",data.salt_value);
                    localStorage.getItem("salt_value");
                    window.location.href='../home/home.html';
                }else{
                    $(".info").text("账号或密码错误！");
                    console.log("登陆失败");
                }
            },
            error:function(){

            }
        })
    })











};