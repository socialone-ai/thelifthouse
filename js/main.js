function selectPackage() {
    document
        .querySelectorAll(".package-selected")
        .forEach((ele) => $(ele).removeClass("package-selected"));
    $(event.currentTarget).addClass("package-selected");
}

$(".selectable").click(() => {
    document
        .querySelectorAll(".image-selected")
        .forEach((ele) => $(ele).removeClass("image-selected"));
    var src = event.currentTarget.src;
    $("#selected-image")
        .fadeOut(300, function () {
            $("#selected-image").attr("src", src);
        })
        .fadeIn(300);
    $(event.currentTarget).addClass("image-selected");
});

$(".main-btn").click(() => {
    
});
