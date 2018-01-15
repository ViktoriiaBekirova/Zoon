// разворот меню, скрытие меню при клике вне области
$(function () {
    // $('#menu').slideUp();
    $('#btn').click(function (e) {
        var $message = $('#menu');

        if ($message.css('display') != 'block') {
            $message.slideDown(1000);

            var yourClick = true;
            $(document).bind('click.myEvent', function (e) {
                if (!yourClick && $(e.target).closest('#menu').length == 0) {
                    $message.slideUp(1000);
                    $(document).unbind('click.myEvent');
                }
                yourClick = false;
            });
        }
        $('.menu-link').click(function(){
            $(document).unbind('click.myEvent');
            $( "#menu" ).slideUp(1000);
        });
        e.preventDefault();
    });
});

// плавное поднятие страницы наверх
$(function () {
    $('#go-top').on('click', function () {
        $("html, body").animate({scrollTop: 0}, 1000);
        return false;
    });
});
// скрытие, появление кнопки наверх
$(function () {
    $(window).scroll(function(){
        var bo = $("html, body").scrollTop();
        if ( bo > 200 ) {
            $("#go-top").fadeIn(1500);
        }
        if ( bo < 200 ) {
            $("#go-top").fadeOut(1500);
        }
    });
});
// таймер обратного отчета времени
window.onload = function(){

    function timer(){

        var hour = document.getElementById('hour').innerHTML;
        var minute = document.getElementById('minute').innerHTML;
        var second = document.getElementById('second').innerHTML;
        var end = false;

        if( second > 0 ) second--;
        else{
            second = 60;

            if( minute > 0 ) minute--;
            else{
                second = 60;

                if( hour > 0 ) hour--;
                else end = true;
            }
        }

        if(end){
            clearInterval(intervalID);
            alert("Таймер сработал!");
        }else{
            document.getElementById('hour').innerHTML = hour;
            document.getElementById('minute').innerHTML = minute;
            document.getElementById('second').innerHTML = second;
        }
    }
    window.intervalID = setInterval(timer, 1000);
};