$("body").ready(function(){

    var shanchu = $(".icon-shanchu3");
    for(var i=0;i<shanchu.length;i++){
        shanchu.on("click",function(){
            //$(this).sibling("input").val("");
        })
    }

    //$(".enter").on("click",function(){
    //    if($(".newpass").val()!==$(".newpass2").val()){
    //        $(".info").text("新密码不相同！");
    //    }else{
    //
    //        console.log(254);
    //    }
    //})
})