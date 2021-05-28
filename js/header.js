var a=0;
$(".hamburger").click(function (e) {
    $(event.currentTarget).toggleClass("activeBurger");
    $(".sidebar").toggleClass("headerActive");
    $(".nav").toggleClass("navActive");
    // if(a%2 == 0){
    //     var width = $("#logoMain")[0].getBoundingClientRect().width;
    //     var height = $("#logoMain")[0].getBoundingClientRect().height;
        
    //     $("#logoMain")
    //     .fadeOut(200, function () {
    //         $("#logoMain").attr("src", "./assets/images/articles/logo-header-inv.png");
    //     })
    //     .fadeIn(200);
    //     $("#logoMain").attr("width", width + "px");
    //     $("#logoMain").attr("height", height + "px");
    // }
    // else{
    //     $("#logoMain")
    //     .fadeOut(200, function () {
    //         $("#logoMain").attr("src", "./assets/images/articles/logo-header.png");
    //     })
    //     .fadeIn(200);
    // }
    // a++;
});
