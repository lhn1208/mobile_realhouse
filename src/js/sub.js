$(document).ready(function(){
    //매물 상품slider
    var swiper = new Swiper('.swiper_offer', {
        slidesPerView: 2,
      });

    //전체매물 slideup
    var $Slidebox=$('.slide_box');
    var $target_cont=$(".offer_map");
    var speed=500;
    $Slidebox.find('.header').click(function(){
        var t_slideBox= $(this).parent();
        // if(!(t_slideBox.hasClass('open'))){
        //     t_slideBox.stop().animate({height : '89.6vh'},300,function(){
        //         // $target_cont.css('display','none');
        //     })
        //     t_slideBox.addClass('open');
        //     // t_slideBox.css('position','relative')
            
        // }else{
        //     t_slideBox.stop().animate({height : '6vh'},300,function(){
        //        t_slideBox.removeClass('open');
        //     })
        //     $target_cont.removeAttr('style');
        // }

        $('.slide_box.open').css('opacity','1');
        $('.slide_box.fix').css('opacity','0');
        $('.slide_box.open').stop().animate({top : '0',opacity:'1'},speed);
    })
              
    //평점
    $('.star_grade span').on('click', function(){
    $(this).parent().children('span').removeClass('on');
    $(this).addClass('on').prevAll('span').addClass('on');
    return false;
    });

    //pop
    $('.slide_link').click(function(){
        $('.pop_slide').stop().animate({top:'44%'},speed);
        $('.cover').addClass('active');
    })
    $('.pop_slide .close').click(function(){
        $('.pop_slide').stop().animate({top:'110%'},speed);
        $('.cover').removeClass('active');
    })
});
