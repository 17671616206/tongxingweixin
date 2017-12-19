/**
 * Created by Administrator on 2017/12/1 0001.
 */
$(function(){
    var sex=0;
    var user_id=localStorage.getItem("user_id");
    $(".sexli").click(function(){
        sex=1;
        sexs(sex);
        $(".icon1").show();
        $(".icon2").hide();
    });

    $(".sexli2").click(function(){
        sex=2;
        sexs(sex);
        $(".icon2").show();
        $(".icon1").hide();
    });
    function sexs(sex){
        $.ajax({
            url:"http://dz.tx178178.com/index.php?m=api&c=User&a=userInfoEdit",
            type:"get",
            dataType:"json",
            data:{
                id:user_id,
                sex:sex

            },
            success:function(data){

            }
        })
    };
    $(".zhuce").on("click",function(){
        window.location.href='admin.html';
    });
})

