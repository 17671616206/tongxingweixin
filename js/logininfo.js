/**
 * Created by zhoul on 2017/12/9.
 */

var salt_value=localStorage.getItem("salt_value");
var id=localStorage.getItem("id");
if(salt_value){
    $.ajax({
        url:"http://dz.tx178178.com/index.php?m=api&c=User&a=header",
        type:"post",
        dataType:"json",
        data:{
            name:id,
            value:salt_value
        },
        success:function(data){
            if(data.state==1){
                localStorage.setItem("user_id",data.user_id);
                console.log("dengluchenggong");


            }
        },
        error:function(data){

        }
    })
}