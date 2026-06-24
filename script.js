function abrirAba(evt, nomeAba) {
    var i, secaoGuia, abaBtn;

    secaoGuia = document.getElementsByClassName("secao-guia");
    for (i = 0; i < secaoGuia.length; i++) {
        secaoGuia[i].classList.remove("ativa");
    }

    abaBtn = document.getElementsByClassName("aba-btn");
    for (i = 0; i < abaBtn.length; i++) {
        abaBtn[i].classList.remove("ativa");
    }

    document.getElementById(nomeAba).classList.add("ativa");
    evt.currentTarget.classList.add("ativa");
}