var allProducts = document.querySelectorAll(".list li")
var div = document.querySelector("#content")
var btn = document.querySelector("#btn")
var div = document.querySelector("#money")
var totalPrice = 0

allProducts.forEach(function (item) {
    item.onclick = function () {
        totalPrice += +(item.getAttribute("price"))
         div.innerHTML += item.textContent + " + "
       if(div.innerHTML != ""){
        btn.style.display = "block";
        btn.style.width = "120px";
        btn.style.height = "50px";
        btn.style.backgroundColor = "hotpink";
        btn.style.color = "white";
        btn.style.border = "none";
        btn.style.borderRadius = "4px";
        btn.style.cursor = "pointer";
       }
    }
})
btn.addEventListener("click", function() {
   div.innerHTML = totalPrice
})