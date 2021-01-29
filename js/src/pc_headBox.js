(function($){

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

var allProductList = '<div class="product_menu"><ul class="tab"><li><a href="#">카테고리별</a></li><li><a href="#">라인별</a></li></ul><div class="category_area"><ul></ul></div><div class="line_area"><ul></ul></div></div>';
var gnbList = '<li><strong></strong><ul class="list"></ul></li>';

var gnbBox = $('.gnbBox');
var allProduct = gnbBox.find('.all_product');
allProduct.append(allProductList);

var productMenu = allProduct.children('.product_menu');
var categoryArea = productMenu.children('.category_area');
var categoryUl = categoryArea.children('ul');
var categoryLen =  categoryCon.length;
var i, j, liEq, liTitle, categoryLi, categoryStrong, subConLen, sCon, slist;

for( i=0 ; i<categoryLen ; i+=1 ){
  categoryUl.append(gnbList);
  categoryLi = categoryUl.children('li');
  categoryStrong = categoryUl.find('strong').eq(i);
  liTitle = categoryCon[i].title;

  categoryStrong.append('<a href="'+ liTitle.link +'" target="'+ liTitle.target +'">'+ liTitle.name +'</a>');

  subConLen = categoryCon[i].subContent.length;
  for( j=0 ; j<subConLen ; j+=1 ){
    slist = categoryLi.eq(i).children('ul');
    sCon = categoryCon[i].subContent[j];
    slist.append('<li><a href="'+ sCon.subLink +'">'+ sCon.subC +'</a></li>');
  }
}//for

// -------------------------------------------------------------------------
var lineArea = productMenu.children('.line_area');
var lineUl = lineArea.children('ul');
var lineLen =  lineCon.length;
// console.log(lineLen);
var i, j, lineLi, lineStrong, lineEq;

for( i=0 ; i<lineLen ; i+=1 ){
  lineUl.append(gnbList);
  lineLi = lineUl.children('li');
  lineStrong = lineUl.find('strong').eq(i);
  liTitle = lineCon[i].title;

  lineStrong.append('<a href="'+ liTitle.link +'" target="'+ liTitle.target +'">'+ liTitle.name +'</a>');

  subConLen = lineCon[i].subContent.length;
  for( j=0 ; j<subConLen ; j+=1 ){
    slist = lineLi.eq(i).children('ul');
    lCon = lineCon[i].subContent[j];
    slist.append('<li><a href="'+ lCon.subLink +'">'+ lCon.subL +'</a></li>');
    
  }
}//for

// ------------------------------------------------------------------
var tab = productMenu.children('ul');
var tabLi = tab.children('li');
var productCon = productMenu.children('div');

tabLi.eq(0).addClass('on');

tabLi.on('click',['a'],function(e){
  e.preventDefault();

  var it = $(this);
  var itIndex = it.index();

  productCon.eq(itIndex).show();
  tabLi.eq(itIndex).addClass('on');

  productCon.eq(itIndex).siblings('div').hide();
  tabLi.eq(itIndex).siblings().removeClass('on');

});
// ------------------------------------------------
var ProductLink = allProduct.children('a');
var menuLink = productMenu.find('a');

productMenu.hide();

allProduct.on('mouseenter',function(){
  productMenu.stop().slideDown();
});
allProduct.on('mouseleave',function(){
  productMenu.stop().slideUp();
});

// focus,blur
ProductLink.on('focus',function(){
  productMenu.stop().slideDown();
});
ProductLink.eq(-1).on('blur',function(){
  productMenu.stop().slideUp();
});














})(jQuery);