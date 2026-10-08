const botao = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

botao.addEventListener("click", function() {
    menu.classList.toggle("ativo");
});