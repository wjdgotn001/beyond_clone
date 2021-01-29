(function($){

    var sellerList = $('.seller_list');
    var sellerBtnBox = sellerList.children('.seller_btn');
    var sellerBtn = sellerBtnBox.children('button');

    var sellerUl = sellerList.children('ul');
    var sellerLi = sellerUl.children('li');
    var sellerLiLen = sellerLi.length;

    // 공통변수
    var timed = 500;
    var permission = true;
    var slideN = 0;

    var cloneN = 0;
    var myClone = 4; //한 영역에 보여질 갯수
    var sellerLi_copy;
    for( ; cloneN<myClone ; cloneN+=1){
        sellerLi_copy = sellerLi.eq(-cloneN-1).clone(true);
        sellerUl.prepend(sellerLi_copy);
    }

    // ul의 가로값 변경
    var sellerLi_after = sellerUl.children('li');
    sellerUl.css({'width':sellerLi_after.length*100+'%', 'position':'relative','left':-100+'%'});
    sellerLi_after.css({'width': 100 / sellerLi_after.length / 4 +'%' });

    sellerBtn.on('click',function(e){
        e.preventDefault();

        var it = $(this);
        var itAttr = it.attr('class');

        if(permission){
            permission = false;
            if(itAttr === 'next_btn'){
                if(slideN >= sellerLiLen-4){
                    slideN = -4;
                    sellerUl.css({'marginLeft':slideN*(-100/4)+'%'});
                }
                slideN += 1;
            }else if(itAttr === 'prev_btn'){
                slideN -= 1;
            }

            sellerUl.animate({'marginLeft':slideN*(-100/4)+'%'},function(){
                if(slideN <= -4){
                    slideN = sellerLiLen-4;
                    sellerUl.css({'marginLeft':slideN*(-100/4)+'%'});
                }

                setTimeout(function(){
                    permission = true;
                },timed/5);
            });//animate
        }//if(permission)
    });






})(jQuery);