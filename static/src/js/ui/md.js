define(["jquery"],function($){
    $(".list-m, .list-min").map(function () {
        var items = $(this).find(".item");
        items.mouseover(function () {
            items.removeClass('active');
            $(this).addClass("active");
        }).mouseout(function () {
            $(this).removeClass('active');
            items.eq(0).addClass('active');
        })
    });
    return "md";
});
