function exibir() {
    document.querySelector(".menu-mobile-itens").style.display = "block";
    document.querySelector(".botao-abrir").style.display = "none";
    document.querySelector(".fundo").style.display = "block"
}

function fechar() {
    document.querySelector(".menu-mobile-itens").style.display = "none";
    document.querySelector(".botao-abrir").style.display = "inline-block";
    document.querySelector(".fundo").style.display = "none"
}

