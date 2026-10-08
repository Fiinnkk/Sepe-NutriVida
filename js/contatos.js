const formulario = document.getElementById("formulario");
const confirmacao = document.getElementById("confirmacao");

formulario.addEventListener("submit", function (event) {

    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;

    document.getElementById("nome-confirmacao").textContent = nome;
    document.getElementById("email-confirmacao").textContent = email;

    formulario.style.display = "none";
    confirmacao.style.display = "block";
});