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
    var $pw_input=$(".member_form .pw_input")
    var $placeholder;
    $pw_input.on('input',function(e){
        $placeholder= $(this).siblings(".placeholder");
        $placeholder.css("display","none")
        if($(this).val()==""){
            $placeholder.css("display","block")
        }
    });
});