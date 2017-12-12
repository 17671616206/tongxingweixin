$(function(){

    $("#code").click(function(){
        var phone = $(".sellinp").val();
        console.log(phone);
        if(phone==""){
            alert("手机号为空号！");
        }else{
            $.ajax({
                url: "http://dz.tx178178.com/index.php?m=api&c=Regist&a=messAges",
                type: "post",
                async: false,
                dataType: "json",
                data: {phone:phone},
                success: function (data) {
                    console.log(data);
                    if(data.state==1){
                        $("#code").attr("disabled","true");
                        $("#code").css({"border-color":"#B0A4BE","color":"#B0A4BE"});
                        var time=9;
                        var timecode=setInterval(function(){
                            $("#code").text(time+'秒后重发送');
                            time=time-1;
                            if(time==0){
                                clearInterval(timecode);
                                $("#code").text("获取验证码");
                                $("#code").attr("disabled","false");
                                $("#code").css({"border-color":"#288CCA","color":"#288CCA"});
                            }
                        },1000);
                        //$("#code").attr("disable","true");
                        //$("#code").text()
                    }else{

                    }

                }
            })
        }

    })

    $("#zhuce").click(function(){
        var phone = $(".sellinp").val();
        var code = $(".sellinp2").val();
        var passwd = $("#pass").val();
        var invite = $("#yaoqing").val();
        console.log("手机号码是："+phone+"验证码是："+code+"密码是："+pass);
        if(phone==""){
            alert("手机号为空！");
        }else if(code==""){
            alert("验证码为空！");
        }else if(pass==""){
            alert("密码为空！");
        }else{
            $.ajax({
                url: "http://dz.tx178178.com/index.php?m=api&c=User&a=register",
                type: "post",
                async: false,
                dataType: "json",
                data: {phone:phone,code:code,passwd:passwd,invite:invite},
                success: function (data) {
                    //var data = eval('(' + data + ')');
                    console.log(data);
                    if(data.state==0){
                        $(".tishi>span").show();
                    }else if(data.state==1){
                        $(".tishi>span").hide();
                    }

                }
            })
        }
    })


})