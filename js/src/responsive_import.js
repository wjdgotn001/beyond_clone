(function($){

  var nowW = deviceSize();

  //디바이스 타입
  var deviceType = ['mobile', 'tablet', 'pc', 'pcfull'];

  var pcUrl = './pc/';
  var mbUrl = './';
  var headBox = $('#headBox');
  var viewBox = $('#viewBox');
  var sellerBox = $('#sellerBox');
  var lineBox;
  var footBox = $('#footBox');

  //import file 
  var headImport = function(){
    headBox.append('<script src="../js/src/headBox.js"></script>');
  };
  var headPcImport = function(){
    headBox.append('<script src="../js/src/pc_headBox.js"></script>');
  };
  var viewImport = function(){
    viewBox.append('<script src="../js/src/viewBox.js"></script>');
  };
  var viewPcImport = function(){
    viewBox.append('<script src="../js/src/pc_viewBox.js"></script>');
  };
  var sellerPcImport = function(){
    sellerBox.append('<script src="../js/src/pc_sellerBox.js"></script>');
  };
  var footPcImport = function(){
    footBox.append('<script src="../js/src/pc_footBox.js"></script>');

  };


  //file separation
  if(nowW === deviceType[0]){
    headBox.load( mbUrl + 'mb_headBox.html', headImport );
    viewImport();
  

  }else if(nowW === deviceType[1]){
    headBox.load( mbUrl + 'mb_headBox.html', headImport );
    viewImport();

  }
  else{
    headPcImport();
    viewBox.load( pcUrl + 'pc_viewBox.html', viewPcImport );
    sellerBox.load( pcUrl + 'pc_sellerBox.html', sellerPcImport );
    $('#sellerBox').after('<div id="lineBox"></div>');
    lineBox = $('#lineBox');
    lineBox.load( pcUrl + 'pc_lineBox.html' );
    footBox.load( pcUrl + 'pc_footBox.html', footPcImport );
  }



  // var nowType = nowW !== deviceType[0] && nowW !== deviceType[1];
  // if(nowType){
  //   headBox.load( pcUrl + 'pc_headBox.html' );
  //   viewBox.load( pcUrl + 'pc_viewBox.html' );
  //   sellerBox.load( pcUrl + 'pc_sellerBox.html' );
  //   $('#sellerBox').after('<div id="lineBox"></div>');
  //   lineBox = $('#lineBox');
  //   lineBox.load( pcUrl + 'pc_lineBox.html' );
  //   footBox.load( pcUrl + 'pc_footBox.html' );
  // }



})(jQuery);