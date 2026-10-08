function filtrar(categoria, botao) {

    // Pega todas as seções de receitas
    let secoes = document.querySelectorAll(".categoria");

    // Pega todos os links do menu
    let botoes = document.querySelectorAll(".filtros a");

    // Remove o "ativo" de todos
    botoes.forEach(function(btn) {
        btn.classList.remove("ativo");
    });

    // Coloca "ativo" no botão clicado
    botao.classList.add("ativo");

    // Mostra ou esconde as seções
    secoes.forEach(function(secao) {

        if (categoria === "todos") {
            secao.style.display = "block";
        }
        else if (secao.id === categoria) {
            secao.style.display = "block";
        }
        else {
            secao.style.display = "none";
        }

    });
}
