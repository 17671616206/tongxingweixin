/**
 * Created by Administrator on 2017/12/1 0001.
 */
$(function(){
    $(".comxing").find('b').click(function(){
        var _index = $(this).index();
        $(this).parent('.comxing').parent().find('.evaluate').val(parseInt(_index+1));
        for(var i = 0;i<=_index;i++){
            $(this).parent('.comxing').find('b').eq(i).attr('class','yellow');
            for(var j = _index+1; j<=5 ; j++){
                $(this).parent('.comxing').find('b').eq(j).attr('class','gray');
                console.log(_index+1);
            }
        }
    });
})


