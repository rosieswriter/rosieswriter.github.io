$(document).ready(function() {

    var url = window.location.href;

    $(".site-navbar a").filter(function() {
        return this.href == url;
    }).addClass("active");

    $('.site-hamburger span').click(function() {
        $(this).toggleClass('active');
        $('.site-navbar').slideToggle('fast');
    });

    $("#home-books").bxSlider({
        pager: false,
        auto: true
    });

    $("a.colorbox").colorbox();

});
