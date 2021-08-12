var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
var is_mobile = navigator.userAgent.match(/Line|J2ME|Opera Mini|SonyEricsson|Nokia|iPhone|iPod|BB10|PlayBook|android|webOS|BlackBerry|Windows Phone|Windows CE|Android/i) != null;

$(function () {

    // loading
    Pace.on('done', function () {
        setTimeout(function () {
            $('#progress').addClass('dispear')
            $('.kv,.t1,.t2,.tittle2,.arrow').addClass('active')
            AOS.init({
                offset: 150,
                //once: true,
                startEvent: 'DOMContentLoaded'
            });
        }, 300);
    });

    $('.is-anchor').on('touchstart click', function (e) {
        var $target = $(this).attr('goto')
        var $targetX = $($target).offset().top
        $('body,html').delay(300).animate({
            scrollTop: $targetX
        }, 1000)
        return false
    })

})