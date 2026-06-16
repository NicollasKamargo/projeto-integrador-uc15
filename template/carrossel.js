function iniciarCarrossel() {
    const imagens = document.querySelectorAll('.carrossel img');
    let indice = 0;

    setInterval(() => {
        imagens[indice].classList.remove('ativo');
        indice = (indice + 1) % imagens.length;
        imagens[indice].classList.add('ativo');

    }, 3000);
}

window.onload = iniciarCarrossel;