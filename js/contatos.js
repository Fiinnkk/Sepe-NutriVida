const form = document.getElementById('formulario');

form.addEventListener('submit', function (event) {
    event.preventDefault();

  
    emailjs.init({
        publicKey: "mW73NoAKaurl0f90l",
    });

   
    emailjs.sendForm('service_2dvg1j8', 'template_4b86qhi', form)
        .then((response) => {
            alert('Mensagem enviada com sucesso!');
        })
        .catch((error) => {
            console.error('Erro ao enviar:', error);
            alert('Erro ao enviar a mensagem.');
        });
});
