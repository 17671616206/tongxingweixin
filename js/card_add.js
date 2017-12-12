$(function(){

    var card = $("#card");
//    ——————选择银行封装的函数————————
    function showList(){
        $("body").scrollmenu({
            type:'cross',
            // bscroll:true,
            // animateIn:'bounceIn',
            // animateOut:'bounceOut',
            click:function(ret){
                if(ret.hasHref){
                    return
                }else{
                    // switch (ret.index){
                    // 	case 0:
                    // 	alert(0);
                    // 	break;
                    // }
                    var data = eval('('+JSON.stringify(ret)+')');
                    console.log(data.title);
                    card.html(data.title);

                }
            }
        });
    }

    $("#card").click(function(){
        showList();

    })


})