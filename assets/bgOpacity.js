
let background = document.querySelector(".bgCover");
function incOpacity() {
    let start = window.innerHeight;

    let opacity = 1 - window.scrollY / start;
    background.style.opacity = opacity;
    console.log(opacity);
}


if (window.addEventListener) {
    addEventListener('DOMContentLoaded', incOpacity, false);
    addEventListener('load', incOpacity, false);
    addEventListener('scroll', incOpacity, false);
}


function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top < (window.innerHeight || document.documentElement.clientHeight)
    );
}
