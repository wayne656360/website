 
(function() {
                var container = document.getElementById( 'container' ),
                    trigger = container.querySelector( 'button.trigger' );

                function toggleContent() {
                    if( classie.has( container, 'container--open' ) ) {
                        classie.remove( container, 'container--open' );
                        classie.remove( trigger, 'trigger--active' );
                        window.addEventListener( 'scroll', noscroll );
            $('.trigger span').html("View WORKs");
                    }
                    else {
                        classie.add( container, 'container--open' );
                        classie.add( trigger, 'trigger--active' );
            $('.trigger span').html("Close");
                        window.removeEventListener( 'scroll', noscroll );
                    }
                }

                function noscroll() {
                    window.scrollTo( 0, 0 );
                }

                // reset scrolling position
                document.body.scrollTop = document.documentElement.scrollTop = 0;

                // disable scrolling
                window.addEventListener( 'scroll', noscroll );

                trigger.addEventListener( 'click', toggleContent );

                // For Demo purposes only (prevent jump on click)
                [].slice.call( document.querySelectorAll('.items-wrap a') ).forEach( function(el) { el.onclick = function() { return false; } } );
            })();

            
jQuery(document).ready(function($) {

  $(".scroll").click(function(event) {
    event.preventDefault();
    $('html,body').animate({
      scrollTop: $(this.hash).offset().top
    }, 800, 'swing');
  });

  

  $(window).bind("resize",windowResize)
    windowResize()
    function windowResize(){
        var introHeight = $(".intro").height();
        var h1Height = $("h1").height();
        var h1Top = introHeight / 2 - h1Height / 2
        console.log(introHeight);
        console.log(h1Height);
        console.log(h1Top);
        $("h1").css({top: h1Top});
    }

  var json;

  function show(data) {
    var html = "";
	  html += "<div class=\"col-sm-4 fadeInUp wowload\">"
      		html +=   "<div class=\"gallery-items\">"
     		 html +=  "<img class=\"img-responsive\" src=\"images/portfolio/21.gif\" alt=\"\" style=\" width: 100%;\"/>"
     			html +=		"<div class=\"caption\">"
                 html +=      " <h3>麗寶集團</h3>"
                  html +=     " <h4>官網提案</h4>"
      				html +=	"<a href=\"images/portfolio/all/21.jpg\" title=\"\" class=\"gallery-image btn btn-default\" data-gallery>View Details</a>"
                   html +=   "</div></div></div>"
    for (var i = 0; i < data.length; i++) {
	  html += "<div class=\"col-sm-4 fadeInUp wowload\">";
      html += "<div class=\"gallery-items\">";
      html += "<img class=\"img-responsive\" src=\"images/portfolio/"+ data[i].photo + ".jpg\" alt=\"" + data[i].title + "\"/>"
      html += "<div class=\"caption\">";
      html += "<h3>"+ data[i].title +"</h3>";
      html += "<h4>"+ data[i].script +"</h4>";
      html += "<a href=\"images/portfolio/all/"+ data[i].photo +".jpg\" title=\""+ data[i].title +"\" class=\"gallery-image btn btn-default\" data-gallery>View Details</a>";
      if(data[i].url != ""){
        html += "<div class=\"btn btn-default\"  onclick=\"window.open('" + data[i].url + "');\">Link to Website</div>";
      }
      html += "</div></div></div>"
    }
    $("#design").html(html);
  }

  function listELLE() {
    var html = "";
      html += "<div class=\"col-sm-12 fadeInUp wowload\"><div class=\"gallery-items\">";
      html += "<img class=\"img-responsive\" src=\"images/portfolio/elle.jpg\" alt=\"ELLE TAIWAN\"/>";
      html += "<div class=\"caption captionBig\"><h3>More ELLE Works</h3><div class=\"btn btn-default\"  onclick=\"window.open(' https://plus.google.com/u/0/115262587646200997226/posts');\">Link to Website</div></div>"
      html += "</div></div>"
    $(".row").append(html);
  }

  $.getJSON("assets/list.json", function(data) {
    json = data;
    show(json);
    listELLE();
    mobileclick();
  });
function mobileclick(){
    if (/Android|webOS|iPhone|iPad|iPod|Blackberry|Opera Mini|IEMobile/i.test(navigator.userAgent)) {
      $(".gallery-items").hover(function() {
        $(this).find('.caption').animate({opacity: "1"});
        $(this).find('.caption h3').css("margin-top", "25%");
        $(this).find('.captionBig h3').css("margin-top", "6%");
      }, function() {
        $(this).find('.caption').animate({opacity: "0" });
        $(this).find('.caption').css("margin-top", "-25%");
        $(this).find('.captionBig').css("margin-top", "-6%");
      });
    }
}

});
	

    
	







var wow = new WOW(
  {
    boxClass:     'wowload',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true        // act on asynchronously loaded content (default is true)
  }
);
wow.init();




$('.carousel').swipe( {
     swipeLeft: function() {
         $(this).carousel('next');
     },
     swipeRight: function() {
         $(this).carousel('prev');
     },
     allowPageScroll: 'vertical'
 });



