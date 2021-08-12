var web_url = ''
var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
var is_mobile = navigator.userAgent.match(/Line|J2ME|Opera Mini|SonyEricsson|Nokia|iPhone|iPod|BB10|PlayBook|android|webOS|BlackBerry|Windows Phone|Windows CE|Android/i) != null;
var tag = document.createElement('script');
tag.src = "//www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
var KVplayer;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    width: '100%',
    height: 'auto',
    videoId: 'MHfV0xr4XAk',
    playerVars: {
      'rel': 0,
      'theme': 'dark',
      'wmode': 'opaque'
    }
  });
}

function onPlayerReady(event) {
  event.target.setPlaybackQuality('hd720')
}
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.BUFFERING) {
    event.target.setPlaybackQuality('hd720')
  }
  if (event.data === 0) {
    player.playVideo()
  }
}
function stopVideo() {
  if (typeof player != 'undefined' && typeof player.playVideo == 'function') {
    player.stopVideo()
  }
}
function coming() {
  alert('Coming Soon!')
}

$(function () {
  $('.buynow_clsoe').on('touchstart click', function (e) {
    $('.buynow').hide()
    return false
  })

  $('.is-anchor').on('touchstart click', function (e) {
    var $target = $(this).attr('goto')
    var $targetX = $($target).offset().top

    $('body,html').delay(300).animate({
      scrollTop: $targetX
    }, 1000)
    return false
  })
  $('.nav_btn').click(function () {
    $('nav').toggleClass('open')
    $(this).toggleClass('open')
  });

  $('.coming').click(function () {
    alert("Coming Soon!")
    return false
  })

  //video

  $('.videoWrap').click(function () {
    $('#videoPop').addClass('active')
    var $vvID = $(this).attr('vvID')
    console.log($vvID)
    if (typeof player != 'undefined' && typeof player.playVideo == 'function') {
      player.loadVideoById({ videoId: $vvID })
    }

  })
  $('#videoPop .pop-close').click(function () {
    $('#videoPop').removeClass('active')
    stopVideo()
  })


})
