$(document).ready(function(){
  
  $('ul.tabs li').click(function(){
    var tab_id = $(this).attr('data-tab');

    $('ul.tabs li').removeClass('current');
    $('.tab-content').removeClass('current');

    $(this).addClass('current');
    $("#"+tab_id).addClass('current');
  })

})

$(function(){
  /* 클릭한 것만 열리게 하고, 다른 질문을 클릭했을때 기존에 열려 있던 질문은 닫히게 하는것 */
  $('.Accordion .Question').on('click',function(){
    var $li = $(this).parent('li')
    if($li.hasClass('show') == true){
      // 열려있는 경우 -> 닫는다. show class를 제거한다
      $li.removeClass('show');
    }else{
      // 클릭한 열려있지 않을경우-> 열려있는 것들을 모두 닫고 클릭한 것만 연다
      $('.Accordion li').removeClass('show');
      $li.addClass('show');
    }
  });
  $('.Accordion .Answer ul li').on('click',function(){
    var $answer = $(this)
    var $trim = $('.Accordion li:nth-child(1) .Answer ul li')
    var $outcolor = $('.Accordion li:nth-child(2) .Answer ul li')
    var $incolor = $('.Accordion li:nth-child(3) .Answer ul li')
    var $option = $('.Accordion li:nth-child(4) .Answer ul li')
    if($answer.hasClass('show') == true){
      // 열려있는 경우 -> 닫는다. show class를 제거한다
      // $answer.removeClass('show');
    }else{
      // 클릭한 열려있지 않을경우-> 열려있는 것들을 모두 닫고 클릭한 것만 연다
      $trim.removeClass('show');
      $outcolor.removeClass('show');
      $incolor.removeClass('show');
      $answer.addClass('show');
    }
  });
})