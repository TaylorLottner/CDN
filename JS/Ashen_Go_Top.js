var home = location.href,
    Siren = {
        GT: function () {
            var offset = 100,
                offset_opacity = 1200,
                scroll_top_duration = 700,
                $back_to_top = $('.cd-top');
            $(window).scroll(function () {
                if ($(this).scrollTop() > offset) {
                    $back_to_top.addClass('cd-is-visible');
                    $(".changeSkin-gear").css("bottom", "0");
                    if ($(window).height() > 950) {
                        $(".cd-top.cd-is-visible").css("top", "0");
                    } else {
                        $(".cd-top.cd-is-visible").css("top", ($(window).height() - 950) + "px");
                    }
                } else {
                    $(".changeSkin-gear").css("bottom", "-999px");
                    $(".cd-top.cd-is-visible").css("top", "-900px");
                    $back_to_top.removeClass('cd-is-visible cd-fade-out');
                }
                if ($(this).scrollTop() > offset_opacity) {
                    $back_to_top.addClass('cd-fade-out');
                }
            });
            //smooth scroll to top
            $back_to_top.on('click', function (event) {
                event.preventDefault();
                $('body,html').animate({
                    scrollTop: 0,
                }, scroll_top_duration);
                return false;
            });
        }
    }
$(function () {
    Siren.GT();
});
