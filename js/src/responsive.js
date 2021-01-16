//반응형 파일 연결

var deviceSize = function(){
  var winSize;

  (function($){

    var deviceType = [
      {type:'mobile',size:480},
      {type:'tablet',size:1024},
      {type:'pc',size:1440},
      {type:'pcfull'}
    ];

    //최초 가로값 파악
    var win = $(window);
    var beforeWinW = win.outerWidth(true); //margin(border,padding)을 포함한 가로값

    var deviceCheck = function(winW){

      var myType;

      for( var i=0 ; i<deviceType.length; i+=1 ){
        if(winW <= deviceType[i].size){
          myType = deviceType[i].type;
          break;

        }else{
          myType = deviceType[3].type;
        }
      }//for
      return myType;
    }//deviceCheck


    winSize = deviceCheck(beforeWinW);

    win.on('resize',function(){

      //바뀐 가로값을 파악
      var resizeWinW = win.outerWidth(true);
      var afterWinW = deviceCheck(resizeWinW);

      //새로고침
      if( winSize !== afterWinW ){
        location.reload();
      }
    });

    return winSize;
    
  })(jQuery);
  return winSize;

}//winSize