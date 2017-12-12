$(function(){
    $("#footer").load("../public/tabs.html");

//    ———————点击删除搜索记录行—————————
//    $(".record").ready(function(){
//        var aLi = $(".record>li");
//        var shanchu = $(".icon-close");
//        for(var i=0;i<shanchu.length;i++){
//            shanchu.on("click",function(){
//                //$(this).parent().remove();
//                console.log(2);
//                console.log($(this).parent().html());
//            })
//        }
//    })


});
//搜索热词部分
$.ajax({
    url:"http://dz.tx178178.com/index.php?m=api&c=Search&a=HeatSearch",
    type:"get",
    dataType:"json",
    data:{
        num:8
    },
    success:function(data){
        var ul=$(".banner_bot");
        for (var i = 0; i < data.length; i++) {
            var li=$('<li>'+data[i].goods_name+'</li>');
            $(ul).append(li);

        }
        //搜索热词点击效果
        $(".banner_bot>li").on("click",function(){
            console.log($(this).text());
            window.location.href='search.html?text='+$(this).text()+''
        })
    }
})



//接受搜索传值
$("body").ready(function(){
//如果有传值，就去掉搜索热词和记录


    var href=window.location.href;
    href=href.split("=")[1];
    href=decodeURIComponent(href);
    if(window.location.search){
        //href = JSON.parse(href);
        //搜索记录存值
        var searchhistory=localStorage.getItem("searchhistory");
        if(searchhistory){
            searchhistory=searchhistory.split(",");
            searchhistory.unshift(href);
            localStorage.setItem("searchhistory",searchhistory);
        }else{
            localStorage.setItem("searchhistory",href);
        }
        //console.log(localStorage.getItem("searchhistory"));
        //$(".banner").css("display","none");
    }else{
        $(".banner").css("display","block");
        //没有传值，显示热词和搜索记录
        //搜索记录
        var searchhistory=localStorage.getItem("searchhistory");
        if(searchhistory){
        searchhistory=searchhistory.split(",");
            //搜索记录去重

            var a=new Array;
            console.log(searchhistory);
            for (var j = 0; j < searchhistory.length; j++) {
                if(a.indexOf(searchhistory[j])==-1){
                    if(searchhistory[j]!==""){
                        a.push(searchhistory[j])
                    }
                }
            }
            searchhistory=a;
            //console.log(searchhistory);
            //console.log(a);
        //console.log(searchhistory);
        var ulhot=$(".record");
        for (var v = 0; v < searchhistory.length; v++) {
            var lis=$('<li><span style="width:90%" class="history">'+searchhistory[v]+'</span><span class="icon iconfont icon-close"></span></li>');
            $(ulhot).append(lis);
        }
        }
        //搜索记录点击效果
            $(".history").on("click",function(){
                window.location.href='search.html?text='+$(this).text()+'';
            })


        //搜索记录删除
        $(".icon-close").on("click",function(){
            console.log($(this).siblings().text());
            var searchhistory=localStorage.getItem("searchhistory");
            searchhistory=searchhistory.split(",");
            for (var v = 0; v < searchhistory.length; v++) {
                if(searchhistory[v]==$(this).siblings().text()){
                    console.log(v);
                    searchhistory.splice(v,1);
                    localStorage.setItem("searchhistory",searchhistory);
                    window.location.href='search.html';
                }

            }
        })



    }
    //console.log(href);

    //搜索商品部分
    $.ajax({
        url:"http://dz.tx178178.com/index.php?m=api&c=Search&a=SearchText",
        type:"get",
        dataType:"json",
        data:{
            text:href
        },
        success:function(data){
            var ul=$(".content");
            for (var i = 0; i < data.length; i++) {
                var lis=$('<a href="../views/company.html?id='+data[i].goods_id+'"><li class="flex_items"><img class="contentimg" src="../images/hehuo.png" alt="" /><div class="contentext"><p class="cotitle">'+data[i].goods_name+'</p><div class="neirong">'+data[i].goods_intro+'</div><div class="flex_between cofoot"><div><span class="font1">'+data[i].price+'</span>元起</div><div class="font2">'+data[i].volume+'人付款</div></div></div></li></a>');
            $(ul).append(lis);

            }
        },
        error:function(data){

        }
    })

    //点击进入商品详情页


})

//点击搜索事件
$("body").ready(function(){
    $(".searchbtn").on("click",function(){
        $(".header_inp").val();
        window.location.href="search.html?text="+$(".header_inp").val()+"";
    })
})

