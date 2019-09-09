function opacity() {
    var bgCover = document.querySelector(".bgCover");
    let albumBlock = document.querySelector(".block-album")


    if (isElementInViewport(albumBlock)) {
        let dist = albumBlock.getBoundingClientRect();
        console.log("hej");

        if (dist.top <= (window.innerHeight - 700)) {
            bgCover.classList.remove("opacity2");
            bgCover.classList.add("opacity1");

        }
        else if (dist.top <= (window.innerHeight - 500)) {
            bgCover.classList.remove("opacity3");
            bgCover.classList.remove("opacity1");
            bgCover.classList.add("opacity2");

        }
        else if (dist.top <= (window.innerHeight - 400)) {
            bgCover.classList.remove("opacity4");
            bgCover.classList.add("opacity3");

        }
        else if (dist.top <= (window.innerHeight - 300)) {
            bgCover.classList.remove("opacity5");
            bgCover.classList.remove("opacity3");
            bgCover.classList.add("opacity4");
        }
        else if (dist.top <= (window.innerHeight - 200)) {
            bgCover.classList.remove("opacity4");
            bgCover.classList.remove("opacity6");
            bgCover.classList.add("opacity5");
        }
        else if (dist.top <= (window.innerHeight - 100)) {
            bgCover.classList.remove("opacity5");
            bgCover.classList.remove("opacity7");
            bgCover.classList.add("opacity6");
        }
        else if (dist.top <= (window.innerHeight - 50)) {
            bgCover.classList.remove("opacity6");
            bgCover.classList.remove("opacity10");
            bgCover.classList.add("opacity7");
        }
        else {

            bgCover.classList.remove("opacity7");
            bgCover.classList.add("opacity10");
        }
    };
}

if (window.addEventListener) {
    addEventListener('DOMContentLoaded', opacity, false);
    addEventListener('load', opacity, false);
    addEventListener('scroll', opacity, false);
}


function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top < (window.innerHeight || document.documentElement.clientHeight)
    );
}
