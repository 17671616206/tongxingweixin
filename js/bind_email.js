/**
 * Created by Administrator on 2017/12/1 0001.
 */
$(function(){
    $(".sexspan").click(function(){
        $("#secinp").prop("value","");
    })
    //验证邮箱
    var inv = $("#secinp");
    var div5 = $(".emaildiv");
    inv.blur(function(){
        if(inv.val()==""){

            div5.html("Email不能为空");
            return false;
        }else if(inv.val().indexOf("@")==-1 || inv.val().indexOf(".")==-1){
            div5.html("Email或者必须包含符号@和.");
            return false;
        }else{
            div5.html("");
            return true;
        }
    })

})
