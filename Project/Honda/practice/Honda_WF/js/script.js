/* ---- Nav Color ---- */ 
// (보류)
// function NavScrollColorEvent() {
//   const $nav = $('.menu');
//   let documentHeight = $(document).scrollTop();
//   let section1Top = jQuery('#section1').offset().top;
//   // 스크롤탑이 섹션2 안에 있고 섹션3보다 위일때
//   if (documentHeight > section1Top) {
//     $nav.addClass('.nav-color1');
    
//   // 스크롤탑이 섹션1일때
//   } else if (documentHeight <= section1Top) {
//     $nav.addClass('.nav-color2');
//   }
// }
// // 윈도우가(창이) 스크롤될 때마다 실행되는 기능
// $(window).scroll(function () {
//   // mainScrollEvent 함수를 호출하여 실행시킴
//   mainScrollEvent();
// })


/* ---- Image Slide ---- */
(function($) {
  $(document).ready(function() {
    let isAni = false;
    let cuId = 0;
    let exId = 0;
    let max = void 0;
    let bannerWidth = 0;
    let bannerHeight = 0;

    const _this = this;

    const $win = $(window);
    const $banner = $('.banner');
    const $wrap = $banner.children('.banner-wrap');
    const $container = $wrap.children('.banner-container');
    const $items = $container.children('.banner-item');
    const $images = $items.find('img');
    const $dotNav = $banner.children('.dot-nav');
    const $dot = $dotNav.find('span');
    const $paddleNav = $banner.children('.paddle-nav');
    const $btnPaddle = $paddleNav.find('button.arrow');
    const $btnPaddlePrev = $paddleNav.find('button.arrow.prev');
    const $btnPaddleNext = $paddleNav.find('button.arrow.next');

    function init() {
      setting();
      addEvent();
      reset();
    }

    function setting() {
      cuId = 0;
      exId = cuId;
      max = $items.length;
    }

    function addEvent() {
      $win.on('resize', handleResizeWindow).trigger('resize');
      $btnPaddle.on('click' , handleClickPaddle);
      $dot.on('click', handleClickDot);
    }

    function handleResizeWindow() {
      bannerWidth = $win.width()
      bannerHeight = $win.height();
      $banner.width(bannerWidth).height(bannerHeight);
      $container.width(bannerWidth * max);
      $items.width(bannerWidth);
      $images.width(bannerWidth).height(bannerHeight);
      slideAnimation(true);
    }

    function handleClickPaddle(e) {
      e.preventDefault();
      if (isAni) {
        return;
      }
      const $el = $(this);
      if ($el.is($btnPaddlePrev)) {
        cuId -= 1;
        if (cuId < 0) {
          cuId = 0;
        }
      } else if ($el.is($btnPaddleNext)) {
        cuId += 1;
        if (cuId > max - 1) {
            cuId = max - 1;
        }
      }
      if (exId !== cuId) {
        slideAnimation();
      }
    }

    function slideAnimation(isResize = false) {
      const left = `${(bannerWidth * cuId) * -1}px`;
      if (!isResize) {
        // 애니메이션 기능.
        if (!isAni) {
          isAni = true;
        }
        paddleActive();
        dotSelect();
        const duration = 300 + 100 * Math.abs(cuId - exId);
        const easing = 'easeInSine'
        $container.stop(true).animate({ left }, { duration, easing, complete: function() {
          isAni = false;
          exId = cuId;
        }});
      } else {
        // 리사이즈 기능.
        isAni = false;
        $container.stop(true).css({ left });
        exId = cuId;
      }
    }

    function handleClickDot(e) {
      e.preventDefault();
      if (isAni) {
        return;
      }
      const idx = $dot.index(this);
      if (exId !== idx) {
        cuId = idx
        slideAnimation();
      }
    }

    function paddleActive() {
      $btnPaddlePrev.removeClass('disabled');
      $btnPaddleNext.removeClass('disabled');
      if (cuId === 0) {
        $btnPaddlePrev.addClass('disabled');
      } else if (cuId === max - 1) {
        $btnPaddleNext.addClass('disabled');
      }
    }

    function dotSelect() {
      $dot.removeClass('selected');
      $dot.eq(cuId).addClass('selected');
    }

    function reset() {
      isAni = false;
      paddleActive();
      dotSelect();
    }

    init();
  });
})(jQuery);


/* ---- Sticky ---- */
var opacity = 0;
function scrollOpacityChange(e) {
  if (e.wheelDelta < 0) { 
    // 마우스 아래 = 이동
    console.log("마우스아래");
    opacity += 0.1;
    $('#section1 .whiteBlock').css(
      'opacity', opacity)
  } else if (e.wheelDelta > 0) {
    // 미우스 위 = 원래대로
    console.log("마우스위");
    opacity -= 0.1;
    $('#section1 .whiteBlock').css(
      'opacity', opacity)
  };
};
window.addEventListener("mousewheel", scrollOpacityChange);

/* ---- Horizontal scroll ---- */          