let exitBox = document.querySelector(".exit-box");
let exitImg = document.querySelector(".exit-img");
exitBox.addEventListener("mouseout", function () {
    exitImg.style.display = "inline-block";
    setTimeout(function () {
        exitImg.style.display = "none";

    }, 1000);
})