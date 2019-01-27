$(document).ready(function(){
    var $body=$('body');
    //전체매물 slideup
    var $Slidebox=$('.slide_box');
    var $all_offer=$('.slide_box.slide_offer');//전체매물
    var $area_offer=$('.area_offer');//지역매물
    $Slidebox.find('.header').click(function(){
        if(!($Slidebox.hasClass('animate_h_up'))){
            $Slidebox.removeClass('animate_h_down').addClass('animated').addClass('animate_h_up');
            var time=setInterval(function(){
                $('.map').css('display','none');
            },550);
        }else{
            $Slidebox.removeClass('animate_h_up').addClass('animate_h_down');
            $('.map').css('display','block');
        }
    })
 
    //pop
    var $slidePop=$('.slide_pop');
    var pop_h=$slidePop.outerHeight();
    $slidePop.css('bottom',-pop_h);
    $('.slide_link').click(function(){
        up_num='0'
         $slidePop.stop().animate({bottom:up_num},speed);       
        pop_set('y');
        return false;
    })
    $('.slide_pop .close').click(function(){
        reset_num=-pop_h;
         $slidePop.stop().animate({bottom:reset_num},speed);       
        pop_set('n');
        return false;
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
                 
    //평점
    $('.star_grade span').on('click', function(){
    $(this).parent().children('span').removeClass('on');
    $(this).addClass('on').prevAll('span').addClass('on');
        return false;
    });

     //1대1문의,일정관리 슬라이드
     var targetArea= $(".open_cont");
     var speed=300;
     targetArea.hide();
     var cont_link= $(".list li a");
    
    //일정관리
    $(".schedule_box").find(cont_link).click(function(){
        var $reqArea=$(this).next(targetArea);
        if(!$(this).hasClass('on')){
            $reqArea.slideDown(speed);
            $(this).addClass('on');
        }else{
            $reqArea.slideUp(speed);
            $(this).removeClass('on');
        }
        return false;
    })
    //1대1문의
    $(".qna_box").find(cont_link).click(function(){
        var $reqArea=$(this).next(targetArea);
        if(!$(this).hasClass('on')){
            $(this).addClass('on').parent().siblings().find('a').removeClass('on');
            $reqArea.slideDown(speed);
        }else{
            $reqArea.slideUp(speed);
            $(this).removeClass('on');
        }
        cont_link.not(this).next(".request_area").slideUp(500);
        return false;
    })

});
