(function($){

  var viewBox = $('#viewBox');
  var indiUl = viewBox.find('ul');
  var indiLi = indiUl.children('li');

  var viewArea = $('.view_area');
  var viewAreaUl = viewArea.children('ul');
  var viewAreaLi = viewAreaUl.children('li');
  var viewAction = viewArea.find('.action');

  // 공통변수
  var slideN = 0;

  // 인디케이터 클릭시 슬라이드 이동-----------------------------------------
  indiLi.children('a').on('click focus',function(e){
    e.preventDefault();

    var it = $(this);
    slideN = it.parent('li').index();

    if( slideN !== viewAction.index() ){
      indiLi.eq(slideN).addClass('action');
      indiLi.eq(slideN).siblings().removeClass('action');
      
      viewAreaLi.eq(slideN).addClass('action');
      viewAreaLi.eq(slideN).siblings().removeClass('action');
      viewAction = viewAreaUl.children('.action');

      viewAreaUl.animate({'marginLeft':slideN*-100+'%'});
      
    }
  });
  

})(jQuery);