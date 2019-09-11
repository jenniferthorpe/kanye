function animationTrigger() {
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
    );
}

if (window.addEventListener) {
    addEventListener('DOMContentLoaded', animationTrigger, false);
    addEventListener('load', animationTrigger, false);
    addEventListener('scroll', animationTrigger, false);
}
