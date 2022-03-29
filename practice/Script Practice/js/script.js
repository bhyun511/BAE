const gender = 'F';
const name = 'Jane';
const isAdult = true;

if(gender ==='M' && (name === 'Mike' || isAdult)){
    console.log('통과')
} else {
    console.log('낫통과')
}

let i = 0;
do {
    i++;
} while (i < 10)

for (let i; i < 10; i++){
    if(i%2){
        continue;
    }
    console.log(i);
}

let fruit = prompt('무슨 과일?');

switch(fruit){
    case '사과':
        console.log('100');
        break;
    case '바나나':
        console.log('100');
        break;
    case '키위':
        console.log('100');
        break;
    case '멜론':
        console.log('100');
        break;
    case '수박':
        console.log('100');
        break;
    default:
        console.log('없음');
}

function sayHello(name){
    let msg = 'Hello';
    if(name){
        msg +=', ${name}';
    }
    console.log(msg);
}

sayHello();
sayHello('Mike');

let msg = "welcome";
// let name = "Mike";

function sayHello(name){
    let newName = name || 'friend';
    let msg = "Hello"
    console.log(msg + '' + name);
}

sayHello('Mike');
console.log(msg);

let days = ["mon", "tue", "wed"];

days.push("thu");
days.unshift("sun");

for (let index = 0; index < days.length; index++) {
    console.log(days[index]);
}

for(let i = 0; i < 10; i++) {
    
}

alert('안녕하세요 ${frult}님');
confirm('딸기');

$menu.click(function(){
  var idx = $(this).index();
  console.log(idx);
});
// 스크롤 이동 반영하기

$menu.click(function(event){
  event.preventDefault();
  var idx = $(this).index();
  var tt = $contents.eq(idx).offset().top;
  console.log(tt);

  $('html, body').animate({scrollTop:tt});

  $contents.each(function(i){
    var tg = $(this);
    if(tg.offset().top < $sct){
      $menu.removeClass('on');
    }
  })

  for(var i = 0; i < $menu.length; i++){
    ev.preventDefault();
    var idx = this.getAttribute('data-num');
    var tt = $contents[idx].offsetTop;

    window.scroll(o,tt); // 해당위치로 이동.

    var scrollInterval = setInterval(function(){
      if(tt != window.pageTOffset){
        if(tt > $lastPos){
          window.scrollBy(0, 55);
        } else {
          window.scrollBy(0, -55);
        }
      } else {
        clearInterval(scrollInterval);
        $lastPos = tt; // 1200
      }
    }, 15)
  }
});
$(window).scroll(function(){
  var $sct = $(this).scrollTop();
  $contents.each(function(i){
    var tg = $(this);
    if(tg.offset().top < $sct){
      $menu.removeClass('on');
      $menu.eq(i).addClass('on');
    }
  });
});

window.addEventListener('scroll',function(){
  var $sct = this.pageYOffset;
  for(var i = 0; i < $contents.length; i++){
    if(s){
      var idx = $contents[i].getAttribute('data-num');
    }
  }
});

var $menu = document.querySelectorAll('#top_menu ul li');
var $contents = document.querySelectorAll('#')

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

while(i < 4){
  document.write('<li>'+coworkers[i]+'</li>');
  i = i + 1;
}
function nightDayHandler(self){
  var target = document.querySelector('body');
  target();
}
function onePlusOne(){
  document.write(1+1+'<br/');
}
onePlusOne();

function sum(){
  if(true){
    document.write(left);
  }
  console.log(sum);
}

while( 1 < coworkers.length){
  document.write('<li>'+coworkers.length+'</li>')
}
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

while(1 < coworkers,length){
  document.write('<li><a href="http://a.com/'+coworkers[i]+'">'+coworkers[i]+'</a></li>')
  i = i + 1;
}
