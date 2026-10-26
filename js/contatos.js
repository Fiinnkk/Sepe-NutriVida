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
document.getElementById('meuFormulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede a página de recarregar

    // Altera o texto do botão para dar um feedback ao usuário
    const btn = event.target.querySelector('button');
    btn.innerText = 'Enviando...';

    // serviço_id e template_id são gerados no painel do EmailJS
    const serviceID = 'default_service';
    const templateID = 'seu_template_id';

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            btn.innerText = 'Enviar E-mail';
            alert('E-mail enviado com sucesso para a pessoa!');
            this.reset(); // Limpa o formulário
        }, (err) => {
            btn.innerText = 'Enviar E-mail';
            alert('Erro ao enviar: ' + JSON.stringify(err));
        });
});
