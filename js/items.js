const carousel_parent = document.querySelector("#carousel_item");
refineSlidePos();
$(window).on("resize", function(){
    refineSlidePos();
});

function refineSlidePos() {
    var item = document.querySelectorAll(".items");
    var height = item[0].getBoundingClientRect().width + "px";
    item.forEach((item, index) => {
        item.style.height = height;
    });

    // var slideWidth = items[0].getBoundingClientRect().width;
    // var height = items[0].getBoundingClientRect().height;
    // carousel_parent.style.height =
    // items[0].getBoundingClientRect().height + "px";
    // if(height < 1000){
    //     carousel_parent.style.height = "600px";
    //     ;
    // }
    
    // items.forEach((item, index) => {
    //     item.style.left = slideWidth * index + "px";
    // });
}