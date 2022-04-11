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

/* ---- scroll ---- */  
function mainScrollEvent() {

  let documentHeight = $(document).scrollTop();
  let section2Top = jQuery('#section2').offset().top;
  let section2Bottom = jQuery('#section2').offset().top + $('#section2').height() - $(window).height();
  let $text1 = $('#section2 .text-area ul li:nth-child(1)');
  let $text2 = $('#section2 .text-area ul li:nth-child(2)');
  let $text3 = $('#section2 .text-area ul li:nth-child(3)');

if (documentHeight >= section2Top-400){
  $('.swiper').addClass('fixed');

} else {
  $('.swiper').removeClass('fixed');
}
console.log('-400');
if (documentHeight >= section2Top+100 && documentHeight < section2Top+200){
  $text1.css({
    'color':'#000000'        
  })
  $text2.css({
    'color':'#e8e8e8'        
  })
  $text3.css({
    'color':'#e8e8e8'        
  })
  console.log('400');
}
if (documentHeight >= section2Top+300 && documentHeight < section2Top+400){
  $text1.css({
    'color':'#e8e8e8'        
  })
  $text2.css({
    'color':'#000000'        
  })
  $text3.css({
    'color':'#e8e8e8'        
  })
  console.log('700');
}
if (documentHeight >= section2Top+500 && documentHeight < section2Top+600){
  $text1.css({
    'color':'#e8e8e8'        
  })
  $text2.css({
    'color':'#e8e8e8'        
  })
  $text3.css({
    'color':'#000000'        
  })
  console.log('1000');
}
if (documentHeight >= section2Bottom-200) {
  $('.swiper').removeClass('fixed');
  $('.swiper').addClass('absolute');
} else if (documentHeight < section2Bottom && documentHeight >= section2Top){
  $('.swiper').addClass('fixed');
  $('.swiper').removeClass('absolute');
}
}

$(window).scroll(function () {
mainScrollEvent();
})

/* ---- swiper ---- */  
const swiper = new Swiper('.swiper', {
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
});

/* ---- main ---- */
$(document).ready(function() {
  let documentHeight = $(document).scrollTop();
  let section1Top = jQuery('#section1').offset().top;
  let $title = $('#section1 .text-area .title');
  let $desc = $('#section1 .text-area .desc');
  let $moreBtn = $('#section1 .text-area .more-btn');
  let $li1 = $('#section1 .text-area ul li:nth-child(1)');
  let $li2 = $('#section1 .text-area ul li:nth-child(2)');

  if (documentHeight >= section1Top-300){
    $title.addClass('up1');
    $desc.addClass('up2');
    $moreBtn.addClass('up3');
    $li1.addClass('up4');
    $li2.addClass('up5');
  }
});

/* ---- Banner scroll resize ---- */

function BannerScrollEvent() {

  let documentHeight = $(document).scrollTop();
  let section6Top = jQuery('#section6').offset().top;
  let section6Bottom = jQuery('#section6').offset().top + $('#section6').height() - $(window).height();


if (documentHeight >= section6Top){
    $('box-banner').addClass('fixed');
      
} else {
    $('.box-banner').removeClass('fixed');
    $('.bannerContainer .image-area img').css({
      'height':'calc(100vw * 300 /1920)'
    })
    $('.bannerContainer .thumbnail p').css({
        'opacity':'1'
    })
    $('.bannerContainer .text-area').css({
      'opacity':'0'
  })
}
if (documentHeight >= section6Top && documentHeight < section6Top+100){
  $('.bannerContainer .image-area img').css({
    'height':'calc(100vw * 400 /1920)'
  })
  $('.bannerContainer .thumbnail p').css({
    'opacity':'1'
  })
  $('.bannerContainer .text-area').css({
    'opacity':'0'
})
}
if (documentHeight >= section6Top+200 && documentHeight < section6Top+300){
  $('.bannerContainer .image-area img').css({
    'height':'calc(100vw * 500 /1920)'
  })
  $('.bannerContainer .thumbnail p').css({
    'opacity':'0.5'
  })
  $('.bannerContainer .text-area').css({
    'opacity':'0'
  })
}
if (documentHeight >= section6Top+400 && documentHeight < section6Top+500){
  $('.bannerContainer .image-area img').css({
    'height':'calc(100vw * 600 /1920)'
  })
  $('.bannerContainer .thumbnail p').css({
    'opacity':'0'
  })
  $('.bannerContainer .text-area').css({
    'opacity':'0.5'
  })
}
if (documentHeight >= section6Top+600 && documentHeight < section6Top+700){
  $('.bannerContainer .image-area img').css({
    'height':'calc(100vw * 740 /1920)'
  })
  $('.bannerContainer .thumbnail p').css({
    'opacity':'0'
  })
  $('.bannerContainer .text-area').css({
    'opacity':'1'
  })
}
if (documentHeight >= section6Top+900 && documentHeight < section6Top+3000){
  $('.bannerContainer .image-area img').css({
    'height':'calc(100vw * 740 /1920)'
  })
  $('.bannerContainer .thumbnail p').css({
    'opacity':'0'
  })
  $('.bannerContainer .text-area').css({
    'opacity':'1'
  })
}
if (documentHeight >= section6Bottom) {
    $('.box-banner').removeClass('fixed');
    $('.box-banner').addClass('absolute');
    $('.bannerContainer .text-area').addClass('absolute');
} else if (documentHeight < section6Bottom && documentHeight >= section6Top){
    $('.box-banner').addClass('fixed');
    $('.box-banner').removeClass('absolute');
}
}

$(window).scroll(function () {
  BannerScrollEvent();
})

/* ---- section4 box ---- */
$(document).ready(function() {
  let documentHeight = $(document).scrollTop();
  let section4Top = jQuery('#section4').offset().top;
  let section4 = jQuery('#section4');
  let $titel = $('#section4 .text-area h1');
  let $desc = $('#section4 .text-area p');
  let $slide1 = $('#section4 ul li:nth-child(1)');
  let $slide2 = $('#section4 ul li:nth-child(2)');
  let $slide3 = $('#section4 ul li:nth-child(3)');

  // section4.hover(() => {
  //   $titel.addClass('up1');
  //   $desc.addClass('up2');
  //   $slide1.addClass('up3');
  //   $slide2.addClass('up4');
  //   $slide3.addClass('up5');
  //   console.log("4에 닿음")
  // })
});


// /* ---- section5 box ---- */
// $(document).ready(function() {
//   let documentHeight = $(document).scrollTop();
//   let section5Top = jQuery('#section5').offset().top;
//   let $titel = $('#section5 .text-area .title');
//   let $desc = $('#section5 .text-area .desc');
//   let $moreBtn = $('#section5 .text-area .more-btn');
//   let $li1 = $('#section5 .text-area ul li:nth-child(1)');
//   let $li2 = $('#section5 .text-area ul li:nth-child(2)');

//   if (documentHeight >= section5Top-300){
//     $titel.addClass('up1');
//     $desc.addClass('up2');
//     $moreBtn.addClass('up3');
//     $li1.addClass('up4');
//     $li2.addClass('up5');
//   }
// });

/* ---- scroll ---- */  
/* 
// Scroll Animation (sa, 스크롤 애니메이션)
const saDefaultMargin = 500;
let saTriggerMargin = 0;
let saTriggerHeight = 0;
const saElementList = document.querySelectorAll('.sa');

const saFunc = function() {
  for (const element of saElementList) {
    if (!element.classList.contains('show')) {
      if (element.dataset.saMargin) {
        saTriggerMargin = parseInt(element.dataset.saMargin);
      } else {
        saTriggerMargin = saDefaultMargin;
      }

      if (element.dataset.saTrigger) {
        saTriggerHeight = document.querySelector(element.dataset.saTrigger).getBoundingClientRect().top + saTriggerMargin;
      } else {
        saTriggerHeight = element.getBoundingClientRect().top + saTriggerMargin;
      }

      if (window.innerHeight > saTriggerHeight) {
        element.classList.add('show');
      }
    }
  }
}

window.addEventListener('load', saFunc);
window.addEventListener('scroll', saFunc);        

function scrollOpacityChange(e) {
  if (e.wheelDelta < 0) { 
    // 마우스 아래 = 이동
    console.log("마우스아래");
    width += 0.1;
    $('#section2 .text-area').css(
      'opacity', opacity)
  } else if (e.wheelDelta > 0) {
    // 미우스 위 = 원래대로
    console.log("마우스위");
    width -= 0.1;
    $('#section2 .text-area').css(
      'opacity', opacity)
  };
};
window.addEventListener("mousewheel", scrollOpacityChange);

$(document).ready(function() {
  const $textArea = $('#section2 .text-area');
  const $text = $('#section2 .text-area');
  const $text1 = $('#section2 .text-area ul li:nth-child(1)');
  const $text2 = $('#section2 .text-area ul li:nth-child(2)');
  const $text3 = $('#section2 .text-area ul li:nth-child(3)');
  console.log($text2);

  $text.hover(() => {
    $textArea.addClass('up1');
    $text1.addClass('color1');
    $text2.addClass('color2');
    console.log('1닿');
  })
  $text2.hover(() => {
    $textArea.addClass('up2');
    $text2.addClass('color3');
    $text3.addClass('color4');
    console.log('2닿');
  })
});


function mainScrollEvent() {
  let documentHeight = $(document).scrollTop();
  let documentHeight2 = $(document).scrollTop() + $('.swiper').height();
  let section2Top = jQuery('#section2').offset().top;
  let section3Top = jQuery('#section3').offset().top;
  let imgBottom = $('.swiper').offset().top + $('.swiper').height();

  // 스크롤탑이 섹션2 안에 있고 섹션3보다 위일때
  if (documentHeight >= section2Top && documentHeight < section3Top) {
      $('swiper').addClass('active');
      
  // 스크롤탑이 섹션 2보다 위일때 (섹션1일때)
  } else if (documentHeight < section2Top) {
      $('swiper').removeClass('active');
  }

  // 이미지의 bottom이 섹션3에 닿았을 때  
  if (imgBottom >= section3Top) {
    $('swiper').addClass('finish');
  }
  // 섹션3의 Top보다 이미지가 위에 있을 때
  if (documentHeight2 < section3Top) {
    $('swiper').removeClass('finish');
  }
}

// 윈도우가(창이) 스크롤될 때마다 실행되는 기능
$(window).scroll(function () {
  // mainScrollEvent 함수를 호출하여 실행시킴
  mainScrollEvent();
})


function mainScrollEvent() {

  let documentHeight = $(document).scrollTop();
  let section2Top = jQuery('#section2').offset().top;
  let section2Bottom = jQuery('#section2').offset().top + $('#section2').height() - $(window).height();
  let $text1 = $('#section2 .text-area ul li:nth-child(1)');
  let $text2 = $('#section2 .text-area ul li:nth-child(2)');
  let $text3 = $('#section2 .text-area ul li:nth-child(3)');

if (documentHeight >= section2Top){
  $('.swiper').addClass('fixed');

} else {
  $('.swiper').removeClass('fixed');
}
if (documentHeight >= section2Top+400 && documentHeight < section2Top+500){
  $text1.addClass('color1');
}
if (documentHeight >= section2Top+700 && documentHeight < section2Top+800){
  $text1.addClass('color2');
  $text2.addClass('color3');
}
if (documentHeight >= section2Top+900 && documentHeight < section2Top+1000){
  $text2.addClass('color4');
  $text3.addClass('color5');
}
if (documentHeight >= section2Bottom-200) {
  $('.swiper').removeClass('fixed');
  $('.swiper').addClass('absolute');
} else if (documentHeight < section2Bottom && documentHeight >= section2Top){
  $('.swiper').addClass('fixed');
  $('.swiper').removeClass('absolute');
}
}

$(window).scroll(function () {
mainScrollEvent();
})

*/
