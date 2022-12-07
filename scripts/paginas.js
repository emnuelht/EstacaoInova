// containerInicio>txtAcesso>button.btn
let verProjetos = document.querySelector('.btn');
verProjetos.addEventListener('click', () => {
    location.replace('projetos.html');
    // open('../../../../ideia do site da estação inova/pagina/projetos.html');
});

let verProjetosRes = document.querySelector('#btn');
verProjetosRes.addEventListener('click', () => {
    location.replace('projetos.html');
});

// containerMeio>items
let cursos = document.querySelector('.item__cursos');
cursos.addEventListener('click', () => {
    location.replace('cursos.html');
});

let projetos = document.querySelector('.item__projetos');
projetos.addEventListener('click', () => {
    location.replace('projetos.html');
});

let semestre = document.querySelector('.item__semestre');
semestre.addEventListener('click', () => {
    location.replace('semestre.html');
});

// containerFinal>sobreEI>redes>redes__items...
let face = document.querySelector('.face');
face.addEventListener('click', () => {
    alert('Em breve...');
});

let insta = document.querySelector('.insta');
insta.addEventListener('click', () => {
    alert('Em breve...');
});