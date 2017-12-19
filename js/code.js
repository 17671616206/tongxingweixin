/**
 * Created by Administrator on 2017/12/6 0006.
 */
var user_id=localStorage.getItem("user_id");
if(user_id){
    $.ajax({
        url:"http://dz.tx178178.com/index.php?m=api&c=User&a=Extension",
        type:"get",
        dataType:"json",
        data:{
            id:user_id
        },
        success:function(data){
            console.log(data.code);
            $(".codenum").text(data.code);
        }
    })
}else{
    window.location.href="login.html?href="+window.location.href+""
}
