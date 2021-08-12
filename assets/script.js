 (function() {
     var container = document.getElementById('container'),
         trigger = container.querySelector('button.trigger');

     function toggleContent() {
         if (classie.has(container, 'container--open')) {
             classie.remove(container, 'container--open');
             classie.remove(trigger, 'trigger--active');
             window.addEventListener('scroll', noscroll);
             $('.trigger span').html("View WORKs");
         } else {
             classie.add(container, 'container--open');
             classie.add(trigger, 'trigger--active');
             $('.trigger span').html("Close");
             window.removeEventListener('scroll', noscroll);
         }
     }

     function noscroll() {
         window.scrollTo(0, 0);
     }

     // reset scrolling position
     document.body.scrollTop = document.documentElement.scrollTop = 0;

     // disable scrolling
     window.addEventListener('scroll', noscroll);

     trigger.addEventListener('click', toggleContent);

     // For Demo purposes only (prevent jump on click)
     [].slice.call(document.querySelectorAll('.items-wrap a')).forEach(function(el) { el.onclick = function() { return false; } });
 })();



 jQuery(document).ready(function($) {

     var enter = document.querySelector('#enter');
     var submit_btn = document.getElementById('submit_btn');

     enter.addEventListener('click', function(e) {

         if ($('#name').val() == '') {
             $('#name').focus();
             alert('請輸入您的姓名!!');
             return false;
         }

         /*pattern = /^[\u4e00-\u9fa5]{2,4}$/;
         if (!pattern.test($('#name').val())) {
             alert('請輸入正確的中文姓名!!');
             $('#name').focus();
             return false;
         }*/

         if ($('#cellphone').val() == '') {
             alert('請輸入您的行動電話!!');
             $('#cellphone').focus();
             return false;
         }
         pattern = /^(09)[0-9]{8}$/;
         if (!pattern.test($('#cellphone').val())) {
             alert('請輸入您正確的行動電話!!');
             $('#cellphone').focus();
             return false;
         }

         if ($('#email').val() == '') {
             alert('請輸入您的Email!!');
             $('#email').focus();
             return false;
         }
         pattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
         if (!pattern.test($('#email').val())) {
             alert('請輸入您正確的Email!!');
             $('#email').focus();
             return false;
         }
         if ($('#message').val() == '') {
             alert('請輸入您的內容!!');
             $('#message').focus();
             return false;
         }

         submit_btn.click();
     });


     $(".scroll").click(function(event) {
         event.preventDefault();
         $('html,body').animate({
             scrollTop: $(this.hash).offset().top
         }, 800, 'swing');
     });

     $(window).bind("resize", windowResize)
     windowResize()

     function windowResize() {
         var introHeight = $(".intro").height();
         var h1Height = $("h1").height();
         var h1Top = introHeight / 2 - h1Height / 2 - 20
         console.log(introHeight);
         console.log(h1Height);
         console.log(h1Top);
         $("h1").css({ top: h1Top });
     }

     var json;
     var json2;
     var jsonOver = 0;

     function show(data) {
         var html = "";

         for (var i = 0; i < data.length; i++) {
             html += "<div class=\"col-sm-4 fadeInUp wowload\">";
             html += "<div class=\"gallery-items\">";
             if (data[i].photo == 21) {
                 html += "<img class=\"img-responsive\" style=\"width: 100%;\" src=\"images/portfolio/" + data[i].photo + ".gif\" alt=\"" + data[i].title + "\"/>"
             } else {
                 html += "<img class=\"img-responsive\" src=\"images/portfolio/" + data[i].photo + ".jpg\" alt=\"" + data[i].title + "\"/>"
             }
             html += "<div class=\"caption\">";
             html += "<h3>" + data[i].title + "</h3>";
             html += "<h4>" + data[i].script + "</h4>";
             html += "<a href=\"images/portfolio/all/" + data[i].photo + ".jpg\" title=\"" + data[i].title + "\" class=\"gallery-image btn btn-default\" data-gallery>View Details</a>";
             if (data[i].url != "") {
                 html += "<div class=\"btn btn-default\"  onclick=\"window.open('" + data[i].url + "');\">Link to Website</div>";
             }
             html += "</div></div></div>"
             $("#design").html(html);
         }
     }

     function show2(data2) {
         var html = "";

         for (var i = 0; i < data2.length; i++) {
             html += "<div class=\"col-sm-3 fadeInUp wowload\">";
             html += "<div class=\"gallery-items\">";
             html += "<img class=\"img-responsive\" src=\"images/event/" + data2[i].photo + ".jpeg\" alt=\"" + data2[i].title + "\"/>"
             html += "<div class=\"caption\">";
             html += "<h3>" + data2[i].title + "</h3>";
             html += "<h4>" + data2[i].script + "</h4>";
             html += "<a href=\"" + data2[i].link + "\"><p>Link to Event</p><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" class=\"ProjectCoverNeue-icon-vNS\"><path d=\"M8.5 3.5c-5 0-8 5-8 5s3 5 8 5 8-5 8-5-3-5-8-5zm0 7c-1.105 0-2-.896-2-2 0-1.106.895-2 2-2 1.104 0 2 .894 2 2 0 1.104-.896 2-2 2z\"></path></svg></a>";
             html += "</div></div></div>"
             $("#design2").html(html);
         }
     }

     $.ajaxSettings.async = false;

     $.getJSON("assets/list.json", function(data) {
         json = data;
         show(json);
         //listELLE();
         jsonOver = 1
     });

     $.getJSON("assets/list2.json", function(data2) {
         json2 = data2;
         show2(json2);
         //listELLE();

     });
     mobileclick();

     function mobileclick() {
         if (/Android|webOS|iPhone|iPad|iPod|Blackberry|Opera Mini|IEMobile/i.test(navigator.userAgent)) {
             $(".gallery-items #design").hover(function() {
                 $(this).find('.caption').animate({ opacity: "1" });
                 $(this).find('.caption h3').css("margin-top", "25%");
                 $(this).find('.captionBig h3').css("margin-top", "6%");
             }, function() {
                 $(this).find('.caption').animate({ opacity: "0" });
                 $(this).find('.caption').css("margin-top", "-25%");
                 $(this).find('.captionBig').css("margin-top", "-6%");
             });
         }
     }

     /******   wheather ******/
     const COUNTER = 0
            const apiURL = 'https://opendata.cwb.gov.tw/fileapi/v1/opendataapi/F-D0047-061?Authorization=CWB-D6AB4D2D-7D41-4BEE-9D75-1D9EF28264F2&format=JSON';
            $.ajax({
                type: "GET",
                url: apiURL,
                dataType: "json",
                success: function (response) {
                    var city = response.cwbopendata.dataset.locations.locationsName
                    var area = response.cwbopendata.dataset.locations.location[3].locationName
                    var wheaterEle = response.cwbopendata.dataset.locations.location[3].weatherElement[9].time[0].elementValue[1].value
                    var rain = response.cwbopendata.dataset.locations.location[3].weatherElement[3].time[0].elementValue.value
                    console.log(city)
                    console.log(area)
                    console.log(rain)
                    var COUNTER = response.cwbopendata.dataset.locations.location[3].weatherElement[0].time[0].elementValue.value
                    COUNTEReasing(COUNTER);
                    $('.city').text(city);
                    $('.area').text(area);
                    var svgSrc = "https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/" + wheaterEle + ".svg"
                    $('.wheaterEle').attr("src",svgSrc);
                    $('.rain').text(rain);
                },
                error: function (thrownError) {
                    $('.wheatherWrap').hide();
                    console.log('Error!!無法抓取到天文台資料');
                }
            });
            function COUNTEReasing(COUNTER) {
                $('.count').each(function () {
                    $(this).prop('Counter', 0).animate({
                        Counter: COUNTER
                    }, {
                        duration: 1000,
                        easing: 'swing',
                        step: function (now) {
                            $(this).text(Math.ceil(now));
                        }
                    });
                });
                
                $('#click div,#click img').removeClass('preload')
            }

 });


 var wow = new WOW({
     boxClass: 'wowload', // animated element css class (default is wow)
     animateClass: 'animated', // animation css class (default is animated)
     offset: 0, // distance to the element when triggering the animation (default is 0)
     mobile: true, // trigger animations on mobile devices (default is true)
     live: true // act on asynchronously loaded content (default is true)
 });
 wow.init();

 $('.carousel').swipe({
     swipeLeft: function() {
         $(this).carousel('next');
     },
     swipeRight: function() {
         $(this).carousel('prev');
     },
     allowPageScroll: 'vertical'
 });