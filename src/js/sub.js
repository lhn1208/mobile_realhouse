$(document).ready(function(){
    var $body=$('body');
    //전체매물 slideup
    var $Slidebox=$('.slide_box');
    var $all_offer=$('.slide_box.slide_offer');//전체매물
    var $area_offer=$('.slide_box.area_offer');//지역매물
    var $area_offer_ani=$('.area_offer.animate_h_up');//지역매물
    $all_offer.find('.header').click(function(){
        if(!($Slidebox.hasClass('animate_h_up'))){
            $Slidebox.removeClass('animate_h_down').addClass('animated').addClass('animate_h_up')
        }else{
            $Slidebox.removeClass('animate_h_up').addClass('animate_h_down');
        }
    })

    //지역매물
    $area_offer.on('touchstart',function(){
        if(!($area_offer.hasClass('animate_h_up'))){
             $area_offer.removeClass('animate_h_down').addClass('animated').addClass('animate_h_up')
        }
    });

 
 
    //pop
    var $slidePop=$('.slide_pop');
    var pop_h=$slidePop.outerHeight();
    $slidePop.css('bottom',-pop_h);
    $('.slide_link').click(function(){
        up_num='0'
         $slidePop.stop().animate({bottom:up_num},speed);       
        pop_set('y');
    })
    $('.slide_pop .close').click(function(){
        reset_num=-pop_h;
         $slidePop.stop().animate({bottom:reset_num},speed);       
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
    // $(window).scroll(function() {
    //     var sct=$(window).scrollTop();
    //     var ev_cont=$('.present_cont').scrollTop();
    //     if(sct>ev_cont){ 
    //         console.log('ev_cont->'+ev_cont);
    //         console.log(sct);
    //         $('.present_sec').stop().animate({'height':'0','opacity':'0'},speed);
    //        // $('.section_wrap').css('padding-top','24%')
    //     }else{
    //         $('.present_sec').stop().animate({'height':'100%','opacity':'1'},speed);
    //         $('.section_wrap').removeAttr('style');
    //     }
    // });
                 
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
