const mehsulSekli = document.getElementById("pi").getAttribute("src");
const mehsulAdi = document.getElementById("pn").innerText;
const mehsulQiymeti = document.getElementById("pp").innerText;

let sebetSekil = document.querySelector("#cart-image"); 
let sebetQiymet = document.querySelector(".item-price"); 
let sebetAd = document.querySelector(".item-name"); 

function sebeteElaveEt(){
    sebetSekil.setAttribute("src", mehsulSekli);
    sebetQiymet.innerText = mehsulQiymeti;
    sebetAd.innerText = mehsulAdi;
}