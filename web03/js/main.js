$(function(){


    //다단메뉴 반응형


    $("nav>ul>li").on("click", function(){
        $(this).addClass("on").siblings().removeClass("on");
    });

    $("#mpn").on("click", function(){
        $("nav").toggleClass("on");
        $(this).toggleClass("on");
    });

})