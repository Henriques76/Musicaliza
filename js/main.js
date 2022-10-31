const menu = document.querySelector(".menu");
const botao = document.querySelector(".lista");
const ul = document.querySelector("ul");
const nav = document.querySelector("nav");

botao.addEventListener("click",controlaMenu);

function controlaMenu(){
    nav.classList.toggle ("show");
}
