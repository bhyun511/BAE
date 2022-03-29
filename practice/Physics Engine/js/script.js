var element = document.querySelector('.right-box');
var rightBox = new Hammer(element);
rightBox.get('pen').set({direction: Hammer.DIRECTION_ALL});

var box = $('.box');

rightBox.on('pandown', function(e){
  console.log(e.deltaY);

  box.css('transform-origin', 'left top');
  box.css('transform', `rotate(${e.deltaY}deg)`);

  var leftValue = perseFloat($('.circle').css('left').slice(0,-2) );
  if( (leftValue + e.deltaY/2) < 180 ){
    $('.circle').css('left','+=' + e.deltaY/2);
  }
})

rightBox.on('panend', function(e){
  $('.box').css('transform', 'rotate(0deg)')
})

rightBox.click('cicle', function(e){
  if((rightBox + e.deltaY/3) = 200){
    $('.circle').css('right','-=' + e.deltaY/5);
  } else ((leftValue + e.deltaY/3));{
    $('.circle').css('left','-=' + e.deltaY/5);
  }
})

// var value = Refactoring(18);

// new Hammer(element) = rightBox.on();
// var pandown = $('.pandown');
