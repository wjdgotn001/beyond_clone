(function($){

  var nowW = deviceSize();

  //디바이스 타입
  var deviceType = ['mobile', 'tablet', 'pc', 'pcfull'];

  var pcUrl = './pc/';
  var headBox = $('#headBox');
  var viewBox = $('#viewBox');
  var sellerBox = $('#sellerBox');

  //import file 
  

  //file separation
  if(nowW === deviceType[0]){

  }else if(nowW === deviceType[1]){

  }else{
    headBox.load( pcUrl + 'pc_headBox.html' )
    viewBox.load( pcUrl + 'pc_viewBox.html' )
    sellerBox.load( pcUrl + 'pc_seller.html' )
  }



})(jQuery);