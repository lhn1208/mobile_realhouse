$(document).ready(function(){
    var $body=$('body');
    //전체매물 slideup
    var $Slidebox=$('.slide_box');
    var $target_cont=$(".offer_map");
    var speed=500;
    var up_num, reset_num;
    $Slidebox.find('.header').click(function(){
        var up_num='88.2%';
        reset_num='7%';
        if(!($Slidebox.hasClass('open'))){
            $Slidebox.stop().animate({height:up_num},speed);
            $Slidebox.addClass('open');
            pop_set('y');
        }else{
            $Slidebox.stop().animate({height:reset_num},speed);
            $Slidebox.removeClass('open');
            pop_set('y');
        }
    })
 
    //pop
    var $layerPop=$('.layer_pop');
    var pop_h=$layerPop.outerHeight();
    $('.slide_link').click(function(){
        up_num='0'
         $layerPop.stop().animate({bottom:up_num},speed);       
        pop_set('y');
    })
    $('.layer_pop .close').click(function(){
        reset_num=-pop_h;
         $layerPop.stop().animate({bottom:reset_num},speed);       
        pop_set('n');
    })

    function pop_set(hide_yn){
        if(hide_yn=='y'){
            $('.cover').addClass('active');
            $body.addClass('scroll_hidden');
        }
        if(hide_yn=='n'){
            $('.cover').removeClass('active');
            $body.removeClass('scroll_hidden');
        }
    }

    //content 닫힘
    $(window).scroll(function() {
        var sct=$(window).scrollTop();
        var ev_cont=$('.present_cont').scrollTop();
        if(sct>10){ 
            $('.present_sec').stop().animate({'height':0},speed);
        }else{
            $('.present_sec').stop().animate({'height':'100%'},speed);
        }
    });

                 
    //평점
    $('.star_grade span').on('click', function(){
    $(this).parent().children('span').removeClass('on');
    $(this).addClass('on').prevAll('span').addClass('on');
        return false;
    });
});
