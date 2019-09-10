let el = document.getElementsByClassName("buy"); 
for (let i = 0; i < el.length; i++) {
   console.log(el[i]); 
   el[i].addEventListener("click", function (e){
      console.log(e.target.id)
   })
}
