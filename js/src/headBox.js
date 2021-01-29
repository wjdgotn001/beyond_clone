// headBox.js

(function($){
  var gnbWrap = $('.gnb_wrap');
  var gnbBtn = gnbWrap.children('.gnb_btn');
  var gnbOpenBtn = gnbBtn.children('.gnb_open_btn');
  var gnbBg = gnbBtn.children('.gnbBg');
  var gnbBox = gnbBtn.children('.gnbBox');
  var gnbCloseBtn = gnbBox.children('.gnb_close_btn');
// gnbBox
  gnbBox.hide();
  gnbBg.hide();

  gnbOpenBtn.on('click',function(e){
    e.preventDefault();

    var gnbDisplay = gnbBox.css('display');

    if(gnbDisplay === 'none'){
      gnbBox.stop().fadeIn();
      gnbBg.stop().fadeIn();
      
    }else{
      gnbBox.stop().fadeOut();
      gnbBg.stop().fadeOut();
    }
  });

  gnbCloseBtn.on('click',function(e){
    e.preventDefault();

    gnbBox.stop().fadeOut();
    gnbBg.stop().fadeOut();
  });


var categoryCon = [
  { 'title':{'name':'스킨케어','link':'beyond.html','target':'_blank'},
    'subContent':[
     {'subC':'스킨/토너', 'subLink':'beyond.html'},
     {'subC':'에멀전/로션', 'subLink':'beyond.html'},
     {'subC':'에센스/세럼', 'subLink':'beyond.html'},
     {'subC':'크림/아이크림', 'subLink':'beyond.html'},
     {'subC':'미스트', 'subLink':'beyond.html'},
     {'subC':'썬케어', 'subLink':'beyond.html'},
     {'subC':'남성', 'subLink':'beyond.html'},
     {'subC':'베이비/주니어', 'subLink':'beyond.html'},
     {'subC':'클렌저', 'subLink':'beyond.html'},
     {'subC':'마스크팩/스크럽', 'subLink':'beyond.html'},
     {'subC':'기초세트', 'subLink':'beyond.html'}]
   },

   { 'title':{'name':'바디','link':'beyond.html','target':'_blank'},
     'subContent':[
     {'subC':'바디클렌저', 'subLink':'beyond.html'},
     {'subC':'바디에멀전/크림', 'subLink':'beyond.html'},
     {'subC':'바디오일/미스트', 'subLink':'beyond.html'},
     {'subC':'핸드/풋/스크럽', 'subLink':'beyond.html'},
     {'subC':'키즈', 'subLink':'beyond.html'},
     {'subC':'바디세트', 'subLink':'beyond.html'}]
    },

    { 'title':{'name':'헤어','link':'beyond.html','target':'_blank'},
      'subContent':[
     {'subC':'샴푸/린스', 'subLink':'beyond.html'},
     {'subC':'에센스/트리트먼트/스케일링', 'subLink':'beyond.html'},
     {'subC':'스타일링', 'subLink':'beyond.html'}]
    },

    { 'title':{'name':'메이크업','link':'beyond.html','target':'_blank'},
      'subContent':[
     {'subC':'페이스', 'subLink':'beyond.html'},
     {'subC':'아이', 'subLink':'beyond.html'},
     {'subC':'립', 'subLink':'beyond.html'},
     {'subC':'네일', 'subLink':'beyond.html'}]
    },

    { 'title':{'name':'온라인 전용','link':'beyond.html','target':'_blank'},
      'subContent':[
     {'subC':'온라인 전용상품', 'subLink':'beyond.html'}]
    }
];

var lineCon = [
  {'title':{'name':'스킨케어','link':'beyond.html','target':'_blank'},
  'subContent':[
    {'subL':'트루 에코', 'subLink':'beyond.html'},
    {'subL':'타임리스', 'subLink':'beyond.html'},
    {'subL':'피토 아쿠아', 'subLink':'beyond.html'},
    {'subL':'피토 아쿠아 화이트', 'subLink':'beyond.html'},
    {'subL':'피토 모이스처', 'subLink':'beyond.html'},
    {'subL':'아크네이처', 'subLink':'beyond.html'},
    {'subL':'엔젤 아쿠아', 'subLink':'beyond.html'},
    {'subL':'히말라야', 'subLink':'beyond.html'},
    {'subL':'로터스 아쿠아', 'subLink':'beyond.html'},
    {'subL':'허브/제주/앰플/가득', 'subLink':'beyond.html'},
    {'subL':'키즈에코', 'subLink':'beyond.html'},
    {'subL':'베이비 퓨어', 'subLink':'beyond.html'},
    {'subL':'에코 데일리 디펜스', 'subLink':'beyond.html'},
    {'subL':'미라클 포레스트', 'subLink':'beyond.html'} ]
  },

  { 'title':{'name':'바디','link':'beyond.html','target':'_blank'},
  'subContent':[
  {'subL':'딥 모이스처', 'subLink':'beyond.html'},
  {'subL':'딥 모이스처 시그니처', 'subLink':'beyond.html'},
  {'subL':'토탈 리커버리', 'subLink':'beyond.html'},
  {'subL':'바디 리프팅', 'subLink':'beyond.html'},
  {'subL':'바디 디펜스', 'subLink':'beyond.html'},
  {'subL':'리바이탈', 'subLink':'beyond.html'},
  {'subL':'워터풀', 'subLink':'beyond.html'},
  {'subL':'키즈에코', 'subLink':'beyond.html'} ]
 },

  {'title':{'name':'헤어','link':'beyond.html','target':'_blank'},
     'subContent':[
     {'subL':'프로페셔널 디펜스', 'subLink':'beyond.html'},
     {'subL':'스캘프 클리닉', 'subLink':'beyond.html'},
     {'subL':'딥 클린', 'subLink':'beyond.html'},
     {'subL':'데미지 리페어', 'subLink':'beyond.html'},
     {'subL':'키즈에코', 'subLink':'beyond.html'},
     {'subL':'아르간 테라피', 'subLink':'beyond.html'},
     {'subL':'스페셜', 'subLink':'beyond.html'},
     {'subL':'스트레스 릴리프', 'subLink':'beyond.html'},
     {'subL':'딥모이스처', 'subLink':'beyond.html'}]
    },

  {'title':{'name':'메이크업','link':'beyond.html','target':'_blank'},
  'subContent':[
  {'subL':'엔젤아쿠아', 'subLink':'beyond.html'},
  {'subL':'아쿠아 틴티드루즈', 'subLink':'beyond.html'},
  {'subL':'타임리스', 'subLink':'beyond.html'},
  {'subL':'피토 아쿠아', 'subLink':'beyond.html'},
  {'subL':'리치 컬러 립스틱', 'subLink':'beyond.html'},
  {'subL':'립 스무더', 'subLink':'beyond.html'},
  {'subL':'퓨어 내츄럴 립밤', 'subLink':'beyond.html'},
  {'subL':'기타 색조', 'subLink':'beyond.html'}]
 },

  {'title':{'name':'프리미엄','link':'beyond.html','target':'_blank'},
     'subContent':[
     {'subL':'엔젤아쿠아', 'subLink':'beyond.html'},
     {'subL':'아쿠아 틴티드루즈', 'subLink':'beyond.html'},
     {'subL':'타임리스', 'subLink':'beyond.html'},
     {'subL':'피토 아쿠아', 'subLink':'beyond.html'},
     {'subL':'리치 컬러 립스틱', 'subLink':'beyond.html'},
     {'subL':'립 스무더', 'subLink':'beyond.html'},
     {'subL':'퓨어 내츄럴 립밤', 'subLink':'beyond.html'},
     {'subL':'기타 색조', 'subLink':'beyond.html'}]
    },

  {'title':{'name':'선물추천','link':'beyond.html','target':'_blank'},
  'subContent':[
  {'subL':'BEST', 'subLink':'beyond.html'},
  {'subL':'1~2만원대', 'subLink':'beyond.html'},
  {'subL':'3~4만원대', 'subLink':'beyond.html'},
  {'subL':'5만원대 이상', 'subLink':'beyond.html'}]
 }

];

// code_list===============================================================
var gnbContentList = '<div class="open_area"><ul class="tab"><li><a href="#">카테고리별</a></li><li><a href="#">라인별</a></li></ul><div class="category"><ul></ul></div><div class="line"><ul></ul></div></div>';

var openMenu = gnbBox.children('.open_menu');
var openMenuUl = openMenu.children('ul');

var categoryLen = categoryCon.length;
var i, j, gnbLi, gnbEq, titleN, categoryWrap, tabUl, tabOn;

for(i=0; i<categoryLen ; i+=1){
  openMenuUl.append('<li></li>');
  
  gnbLi = openMenuUl.children('li').eq(i);
  gnbEq = gnbLi.children('a');
  
  titleN = categoryCon[i].title;
  gnbLi.append('<a href="'+ titleN.link +'" target="'+ titleN.target +'">'+ titleN.name +'</a>');

  gnbLi.append(gnbContentList);
  tabUl = openMenuUl.find('.tab').eq(i);
  tabOn = tabUl.children('li').eq(0);
  tabOn.addClass('on');

// --------------------------------------------------------------------------------------------------
subConLen = categoryCon[i].subContent.length;
for(j=0; j<subConLen ; j+=1){

  categoryWrap = gnbLi.find('.category');
  categoryUl = categoryWrap.children('ul');
  
  subN = categoryCon[i].subContent[j];
  categoryUl.append('<li><a href="'+subN.subLink+'">'+subN.subC+'</a></li>');
  }

  lineConLen = lineCon[i].subContent.length;
  
  // -----------------------------------------------------------------
  for(j=0; j<lineConLen ; j+=1){
    
    lineWrap = gnbLi.find('.line');
    lineUl = lineWrap.children('ul');
    
    subl = lineCon[i].subContent[j];
    lineUl.append('<li><a href="'+subl.subLink+'">'+subl.subL+'</a></li>');
  }
}//for

// 아코디언--------------------------------------------------
var openMenuLi = openMenu.find('li');
var openMenuLink = openMenuLi.children('a');
var openMenuArea = openMenuLi.children('.open_area');

var openArea = openMenu.find('.open_area');
openArea.hide();

openMenuLink.on('click',function(e){
  e.preventDefault();

  var it = $(this);

  it.siblings('.open_area').stop().slideToggle(function(){
    var display = it.siblings('.open_area').css('display') === 'none';

    if(display){
      // none
      it.removeClass('action');
      it.children('span').addClass('hidden_context');
      it.children('span').text('열기');

    }else{
      // block
      it.addClass('action');
      it.children('span').addClass('hidden_context');
      it.parents('li').siblings().children('a').removeClass('action');
      it.children('span').text('닫기');
    }
  });

  it.parents('li').siblings().children('.open_area').stop().slideUp();

});//openMenuLink.on

// ------------------------------------------------------------------
var openLi = openMenu.find('li');
var tab = openLi.find('.tab');
var tabLi = tab.children('li');
var tabLink = tabLi.children('a');
var openAreaCon = openArea.children('div');

tabLink.on('click',['a'],function(e){
  e.preventDefault();

  var it = $(this);
  var liIndex = it.parent().index();
  var itI = it.index();

  it.addClass('on');
  it.siblings().removeClass('on');

  
  // openAreaCon.eq(itI).show();
  // openAreaCon.eq(itI).siblings('div').hide();

  // tabLi.eq(itI).addClass('on');
  // tabLi.eq(itI).siblings().removeClass('on');


});

})(jQuery);
