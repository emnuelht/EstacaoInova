const menuBtn = document.querySelector('.acaoMenu');

function aparecer() {
    const items = document.querySelector('.container__items');

    items.classList.toggle('ativo');
}

menuBtn.addEventListener('click',aparecer);

