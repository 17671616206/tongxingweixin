$(function(){
var address=window.location.search;
    if(address){
    address=address.split("=")[1];
        address=decodeURIComponent(address);
    //console.log(address);
        $(".listadd").text(address);
        var id0,id1,id2;
        $.ajax({
            url:"http://dz.tx178178.com/index.php?m=api&c=User&a=regionChoice&id=1",
            type:"get",
            dataType:"json",
            data:{},
            success:function(data){
                a=address.split("-");
                for (var i = 0; i < data.length; i++) {
                    if(a[0]==data[i].region_name){
                        id0=data[i].region_id;

                        $.ajax({
                            url:"http://dz.tx178178.com/index.php?m=api&c=User&a=regionChoice&id="+id0+"",
                            type:"get",
                            dataType:"json",
                            data:{},
                            success:function(data){
                                a=address.split("-");
                                for (var i = 0; i < data.length; i++) {
                                    if(a[1]==data[i].region_name){
                                        id1=data[i].region_id;

                                        $.ajax({
                                            url:"http://dz.tx178178.com/index.php?m=api&c=User&a=regionChoice&id="+id0+"",
                                            type:"get",
                                            dataType:"json",
                                            data:{},
                                            success:function(data){
                                                a=address.split("-");
                                                for (var i = 0; i < data.length; i++) {
                                                    if(a[2]==data[i].region_name){
                                                        id2=data[i].region_id;
                                                        regions=id0+","+id1+","+id2;

                                                    }

                                                }

                                            }});
                                    }

                                }

                            }});
                    }

                }

            }});
}

    var info=localStorage.getItem("info");
    if(info){
        info=info.split("-");
        //console.log(info);
        $(".name").val(info[0]);
        $(".phone").val(info[1]);
    }
$(".daaselect").on("click",function(){
    var info=$(".name").val()+"-"+$(".phone").val();
    localStorage.setItem("info",info);
    window.location.href='address_select.html';
});

    $(".gouxaun").on("click",function(){
        if($(".gouxaun").attr("src")=="../images/gouxuan.png"){
            $(".gouxaun").attr("src","../images/bugouxuan.png")
        }
        else if($(".gouxaun").attr("src")=="../images/bugouxuan.png"){
            $(".gouxaun").attr("src","../images/gouxuan.png")
        }
    });

var state=0;
    $(".voicebtn").on("click",function(){
        if($(".gouxaun").attr("src")=="../images/gouxuan.png"){
            state=1;
        }
            if(localStorage.getItem("user_id")&$(".name").val()&$(".phone").val()&address&$(".deadd").val()){
                var user_id=localStorage.getItem("user_id");
                var name=$(".name").val();
                var phone=$(".phone").val();
                var add=address;
                var addinfo=$(".deadd").val();
                $.ajax({
                    url:"http://dz.tx178178.com/index.php?m=api&c=User&a=fixedNumEdit",
                    type:"get",
                    dataType:"json",
                    data:{
                        user_id:user_id,
                        name:name,
                        phone:phone,
                        region:regions,
                        address:addinfo,
                        state:state
                    },
                    success:function(data){
                        if(data=="1"){
                            window.location.href='service_address.html';
                        }
                    }
                })

            }


        })

});