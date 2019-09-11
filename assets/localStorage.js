let items = []; 
localStorage.setItem('items', JSON.stringify(items));
let el = document.getElementsByClassName("buy"); 
for (let i = 0; i < el.length; i++) {
   el[i].addEventListener("click", function (e){
        console.log(e.target.id)
      let toString = localStorage.getItem('items');
      let parsed = JSON.parse(toString);
      console.log(toString)
      parsed.push(e.target.id); 
      localStorage.setItem('items', JSON.stringify(parsed)); 

      let num = document.getElementById('num'); 
      num.innerHTML = parsed.length; 
   })
}
