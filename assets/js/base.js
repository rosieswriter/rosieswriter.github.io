$(document).ready(function() {

    var url = window.location.href;

    $(".site-navbar a").filter(function() {
        return this.href == url;
    }).addClass("active");

    $(".site-navbar ul").tinyNav({
        header: "Navigation"
    });

    $("#home-books").bxSlider({
        pager: false,
        auto: true
    });

    $("a.colorbox").colorbox();

});
