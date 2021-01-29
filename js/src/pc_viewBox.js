(function($){

    var indicator = $('.view_title_indicator');
    var indiUl = indicator.children('ul');
    var indiLi = indiUl.children('li');
    var indiLink = indiLi.children('a');

    var viewArea = $('.view_area');
    var viewAreaUl = viewArea.children('ul');
    var viewAreaLi = viewAreaUl.children('li');
  
    // 공통변수
    var slideN = 0;
    var timed = 500;


    // a focus기능 강제 비처리
    indiLink.attr({'tabIndex':'-1'});

    indiLi.children('a').on('mouseenter focus click',function(e){
        e.preventDefault();

        var it = $(this);
        slideN = it.parent('li').index();
        indiLi.eq(slideN).addClass('action');
        indiLi.eq(slideN).siblings().removeClass('action');

        if(e.type === 'focus' || e.type === 'mouseenter'){
        viewAreaUl.stop().animate({'marginLeft':slideN * -100 + '%'}, timed);    
        }else if(e.type = 'click'){
            setTimeout(function(){
                var itLink = it.attr('href');
                $(itLink).attr({'tabIndex':0});

                indiLi.eq(slideN).siblings().children('a').attr({'tabIndex':-1});
                $(itLink).focus();
            }, timed + 10);
        }
    });//indiLi.children('a')

    indiLi.children('a').on('blur',function(){
        $(this).attr({'tabIndex':-1});
    });


})(jQuery);