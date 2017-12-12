/**
 * Created by Administrator on 2017/11/29 0029.
 */
$(function(){
    var card_select = [
        {"bank":"中国人民银行","num":"2333"},
        {"bank":"中国建设银行","num":"2333"},
        {"bank":"中国招商银行","num":"2333"},
        {"bank":"中国工商银行","num":"2333"}
    ];
    var tcontent = $('.tcontent');
    for(var i=0;i<card_select.length;i++){
        tcontent.append('<div class="tbanner flex_between"><div class="flex_items"><img class="cashimg" src="" alt=""/><div class="tname"><p>'+card_select[i].bank+'</p><p>'+card_select[i].num+'</p></div></div><span class="icon iconfont icon-duigou2"></span></div>');
        $(".tbanner").eq(i).on("click",function(){
            // 传入当前的索引
//          alert($(this).index())
            iconcheck ($(this).index());

        })
    }

    // 选择的显示，其他的隐藏
    // 默认选择的第一条
    iconcheck (0);
    function iconcheck (n){
        $(".tbanner").eq(n).find(".icon").show().end().siblings().find(".icon").hide();
    }


})
