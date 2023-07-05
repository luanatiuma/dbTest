function construirPagina(){
    const h1 = document.createElement('h1');
    h1.classList.add('tituloPagina');
    h1.setAttribute('id', titulo);
    h1.innerHTML = 'Página dinâmica';
    h1.style.color = 'red';

    const h2 = document.createElement('h2');
    const p1 = document.createElement('p');

    document.body.appendChild('h1');
    document.body.appendChild('h2').innerHTML = 'Subtítulo';
    document.body.appendChild('p1').innerHTML = 'Lorem blablabla';
}
