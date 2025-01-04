import $ from "jquery";

export function commonJS() {
    let prevScrollpos = window.scrollY;
    let currentMousePos = { x: -1, y: -1 };

    $(window).scroll(function () {
        let o = window.scrollY;
        prevScrollpos > o ? $(".logo").removeClass("logo--scrolled") : $(".logo").addClass("logo--scrolled"), (prevScrollpos = o);
    });

    const $cursor = $(".cursor-custom")

    function setCursorPosition(o, s) {
        $cursor.css("left", o + "px"), $cursor.css("top", s + "px");
    }

    $(window).mousemove(function (o) {
        (currentMousePos.x = o.pageX), (currentMousePos.y = o.pageY), $cursor.data("posX", o.clientX), $cursor.data("posY", o.clientY), setCursorPosition(currentMousePos.x, currentMousePos.y);
    }),

    $(window).scroll(function (o) {
        setCursorPosition($cursor.data("posX"), window.scrollY + $cursor.data("posY"));
    }),

    $(".teaser-project__image-hold").hover(function (o) {
        $cursor.toggleClass("cursor-custom--hovered"), $(".cursor-custom__label").toggleClass("cursor-custom__label--hovered");
    });

    window.addEventListener('load', function() {
        const heroImage = document.querySelector('.project-detail__hero-image');
        if (heroImage) {
          heroImage.style.opacity = 1;
          heroImage.style.transition = 'opacity .5s';
        }
      });
}