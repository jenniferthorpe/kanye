function parallax() {
    var blockShow = document.querySelector(".block-album");
    var menuShow = document.querySelector("nav");
    console.log(isElementInViewport(blockShow));

    if (isElementInViewport(blockShow)) {
        menuShow.classList.add("showing");
        menuShow.classList.remove("removing")
        menuShow.classList.remove("class-hide")

    }
    else {
        menuShow.classList.add("removing")
        menuShow.classList.remove("showing")
    }
}


function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();

    return (
        rect.top < (window.innerHeight || document.documentElement.clientHeight)
        // rect.top >= 0 &&
        // rect.left >= 0 &&
        // rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        // rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

if (window.addEventListener) {
    addEventListener('DOMContentLoaded', parallax, false);
    addEventListener('load', parallax, false);
    addEventListener('scroll', parallax, false);
}

function elementDistanceFromBottomOfViewport(el) {
    var rect = el.getBoundingClientRect();

    return window.innerHeight - rect.top;
}