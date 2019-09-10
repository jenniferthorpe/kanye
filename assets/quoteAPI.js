let quote = document.querySelector(".quote");
let quoteBtn = document.querySelector(".quote-btn");

quoteBtn.addEventListener("click", function () {

    fetch('https://api.kanye.rest')
        .then(res => res.json())
        .then(json => {
            quote.innerHTML = '"' + json.quote + '"'
        });

});
// console.log(json.quote), console.log("hej")
