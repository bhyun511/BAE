coworkers.showAll = function() {
  for(var key in coworkers) {
    document.write(key+':'+coworkers[key]+'<br>');
  }
}

function onePlusOne(){
  document.write(1+1+'<br>');
}
onePlusOne();
function sum(left, right){
  document.write(left+right+'<br>');
}
function sumColorRed(left,right){
  document.write('<div style="color:red">'+left+right+'</div><br>');
}
sum(2,3);
sumColorRed(2,3);
sum(3,4);

function sum2(left,right){

}
document.write(sum2(2,3)+'<br>');
document.write('<div style="color:red>'+sum2(2,3)+'</div>');
document.write('<div style="font-size:3rem">'+sum2(2,3)+'</div>');

function two(){
  document.write('<li>2-1</li>');
  document.write('<li>2-2</li>');
}
document.write('<li>1</li>');
two();
document.write('<li>3</li>');

var coworkers = ['bae', 'jung', 'hyun'];

function BodySetColor(color){
  document.querySelector('body').style.color = color;
}
function BodySetBackgroundColor(color){
  document.querySelector('body').style.backgroundColor = color;
}
function nightDayHandler(self){
  var target = document.querySelector('body');
  if(self.value === 'night'){
    Body.setBackgroundColor('black');
    Body.setColor('white');
    self.value = 'day';

    Links.setColor('powderblue');
  } else {
    Body.setBackgroundColor('white');
    Body.setColor('black');
    self.value = 'night';

    Link.setColor('blue');
  }
}

var coworkers = {
  "programmer":"bae",
  "designer":"jung"
};

document.write(coworkers[0]);
document.write(coworkers[1]);
document.write(coworkers.length);
// document.write('<li>1</li>');

var i = 0;
while(1 < coworkers,length){
  document.write('<li><a href="http://a.com/'+coworkers[i]+'">'+coworkers[i]+'</a></li>')
  i = i + 1;
}

var element = document.querySelector('.right-box');
var rightBox = new Hammer(element);
rightBox.get('pen').set({direction: Hammer.DIRECTION_ALL});

var box = $('.box');

rightBox.on('pandown', function(e){
  console.log(e.deltaY);
  
  box.css('transform-origin', 'left top');
  box.css('transform', `rotate(${e.deltaY/10}deg)`);

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

var value = Refactoring(18);

new Hammer(element) = rightBox.on();
var pandown = $('.pandown');


$(function() {

  $("body").mousewheel(function(event, delta) {
    this.scrollLeft -= (delta * 30);
    event.preventDefault();
  });

});

const backgroundBlendMode = document.querySelector('mode');
const selectElem = document.querySelector('select');
const divElem = document.querySelector('div');

selectElem.addEventListener('change', () => {
  divElem.style.backgroundBlendMode = selectElem.value;
});

// var i = 0;
// while(i < 4){
//   document.write('<li>'+coworkers[i]+'</li>');
//   i = i + 1;
// }
// function nightDayHandler(self){
//   var target = document.querySelector('body');
//   target();
// }
// function onePlusOne(){
//   document.write(1+1+'<br/');
// }
// onePlusOne();
// function sum(left,right)

// function colors(){
//   if(true){
//     document.write(left);
//   }
// }
// var i = 0;
// while( 1 < coworkers.length){
//   document.write('<li>'+coworkers.length+'</li>')
// }

