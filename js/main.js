$(function () {
    $(document).scroll(function () {
        var $nav = $(".myNav");
        $nav.toggleClass('scrolled', $(this).scrollTop() > 60);
    });
});
