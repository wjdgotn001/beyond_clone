(function($){

  var nowW = deviceSize();

  //디바이스 타입
  var deviceType = ['mobile', 'tablet', 'pc', 'pcfull'];

  var url = './common/';
  var pcUrl = './pc/';
  var headBox = $('#headBox');

  //import file 
  

  //file separation
  if(nowW === deviceType[0]){
    headBox.load( url + 'headBox.html' );
  }else if(nowW === deviceType[1]){
    headBox.load( url + 'headBox.html' );
  }else{
    headBox.load( pcUrl + 'pc_headBox.html' )
  }



})(jQuery);