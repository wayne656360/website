

$(function () {
    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        loop: true,
        navigation: {
            nextEl: '.next',
            prevEl: '.prev',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
            renderFraction: function (currentClass, totalClass) {
                return '<span class="' + currentClass + '"></span>'
                    + '<span class="' + totalClass + '"></span>';
            }
        },
        effect: 'slide',
        mousewheel: {
            forceToAxis: true,
          },
    })


})
