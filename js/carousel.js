const carousel_parent = document.querySelector("#carousel_item");
refineSlidePos();
$(window).on("resize", function(){
    refineSlidePos();
    carousel_parent.style.transform = "translateX(0)";
    document.querySelector(".selected-slide").classList.remove("selected-slide");
    carousel_parent.children[0].classList.add("selected-slide");
});

function refineSlidePos() {
    var items = Array.from(carousel_parent.children);
    var item = document.querySelector(".main-container").querySelectorAll(".items");
    var height = item[0].getBoundingClientRect().width + "px";
    item.forEach((item, index) => {
        item.style.height = height;
    });

    var slideWidth = items[0].getBoundingClientRect().width;
    var height = items[0].getBoundingClientRect().height;
    carousel_parent.style.height =
    items[0].getBoundingClientRect().height + "px";
    if(window.innerWidth < 1000){
        carousel_parent.style.height = "400px";
    }
    
    items.forEach((item, index) => {
        item.style.left = slideWidth * index + "px";
    });
}

$("#left_carousel").click(function () {
    const currentSlide = carousel_parent.querySelector(".selected-slide");
    const previousSlide = currentSlide.previousElementSibling;

    if (previousSlide == null) {
        carousel_parent.style.transform =
            "translateX(-" +
            carousel_parent.children[carousel_parent.children.length - 1].style
                .left +
            ")";

        currentSlide.classList.remove("selected-slide");
        carousel_parent.children[
            carousel_parent.children.length - 1
        ].classList.add("selected-slide");
    } else {
        carousel_parent.style.transform =
            "translateX(-" + previousSlide.style.left + ")";

        currentSlide.classList.remove("selected-slide");
        previousSlide.classList.add("selected-slide");
    }
});
$("#right_carousel").click(function () {
    const currentSlide = carousel_parent.querySelector(".selected-slide");
    const nextSlide = currentSlide.nextElementSibling;

    if (nextSlide == null) {
        carousel_parent.style.transform = "translateX(0)";

        currentSlide.classList.remove("selected-slide");
        carousel_parent.children[0].classList.add("selected-slide");
    } else {
        carousel_parent.style.transform =
            "translateX(-" + nextSlide.style.left + ")";

        currentSlide.classList.remove("selected-slide");
        nextSlide.classList.add("selected-slide");
    }
});
