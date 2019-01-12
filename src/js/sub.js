$(document).ready(function(){
    //매물 상품swiper
    var swiper = new Swiper('.swiper_offer', {
        slidesPerView: 2,
       });
    var swiperFigure = new Swiper('.swiper_box .swiper_figure',{
        pagination: {
         el: '.pagination1',type: 'fraction',
        },
        
    }); 


    var swiperMenu = new Swiper('.swiper_box .swiper_menu',{
        slidesPerView: 'auto',
        paginationClickable: true,
        freeMode: true,
        pagination: false
    });

   
    var tabLen = $(".swiper_menu li").length;
    var swiperCon = new Swiper('.swiper_box .swiper_cont',{
        slidesPerView: 1,
        spaceBetween: 0,
        pagination: false,
        loop: false,
        autoHeight:true,
        onSlideChangeStart : function(swiper){
            var idx = swiper.activeIndex;
            console.log('idx===>'+swiper);

            $(".swiper_menu li").removeClass("active").eq(idx).addClass("active");
            if(idx < tabLen){
                swiperMenu.slideTo(idx, 300);
            }
            
        }
        // pagination: {
        //     el: '.pagination2',
        //           clickable: true,
        //         renderBullet: function (index, className) {
        //         return '<span class="' + className + '">' + (swiper_menu[index]) + '</span>';
        //       },
        //   },
          
    }); 

    


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

                 
    //평점
    $('.star_grade span').on('click', function(){
    $(this).parent().children('span').removeClass('on');
    $(this).addClass('on').prevAll('span').addClass('on');
        return false;
    });
});
