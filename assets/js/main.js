const body = document.body,
    scrollWrap = document.getElementsByClassName("smooth-scroll-wrapper")[0],
    height = scrollWrap.getBoundingClientRect().height - 1;

var offset = 0;

body.style.height = Math.floor(height) + "px";

function smoothScroll() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        offset += (window.pageYOffset - offset) * 0.85;
    }
    else {
        offset += (window.pageYOffset - offset) * 0.04;
    }

    var scroll = "translateY(-" + offset + "px) translateZ(0)";
    scrollWrap.style.transform = scroll;

    callScroll = requestAnimationFrame(smoothScroll);
}

smoothScroll();
