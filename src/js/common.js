$(document).ready(function(){
    //알림창
    alarm_show();
    function alarm_show(){
    $('.layer_alarm').animate({
        bottom:'8%'
    },500)
    }
    setTimeout(alarm_remove,1000);
    function alarm_remove(){
    $('.layer_alarm').animate({
        bottom:'-8%'
    },500)
    }
  
});