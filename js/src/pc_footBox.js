(function($){

    var familySite = $('.family_site');
    var familySiteUl = familySite.children('ul');
    var familySiteLink = familySiteUl.find('a');
    


    familySiteUl.hide();
    var slideDown = function(){
        familySiteUl.stop().slideDown();
    };
    var slideUp = function(){
        familySiteUl.stop().slideUp();
    };


    familySite.on({
        'mouseenter':slideUp,
        'mouseleave':slideDown
    });

    familySite.on('focus',slideUp);
    familySiteLink.eq(-1).on('blur',slideDown);



})(jQuery);