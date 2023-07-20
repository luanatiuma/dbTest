import { buscaProdutos } from "./paginaGet.js";

buscaProdutos(true);

document.addEventListener('click', evente =>{

    if(evente.target.classList.contains('delete-button')){

    fetch(`http://localhost:3000/produtos/${evente.target.value}`, {
            method: 'DELETE', headers:{
                'Content.type': 'application/json'
            }
        }).then(resposta => {
            if(resposta.ok){
                alert('Produto apagado!');
                buscaProdutos(true);
                // location.reload(); //Jeito ruim, será melhorado nas próximas aulas
            }
        });
    }
})

//Todo esse código foi substituído pelo import do buscaProdutos
// fetch('http://localhost:3000/produtos', {
//             method: 'GET',
//             headers: {
//                 'Content-type': 'application/json'
//             }
//         })
//             .then(resposta => resposta.json())
//             .then(resposta => {

//                 for (let i = 0; i < resposta.length; i++) {

//                     const ul = document.createElement('ul');
//                     ul.classList.add('produto');

//                     ul.appendChild(document.createElement('li')).innerHTML = resposta[i].id;
//                     ul.appendChild(document.createElement('li')).innerHTML = resposta[i].descricao;
//                     ul.appendChild(document.createElement('li')).innerHTML = resposta[i].preco;

                   

//                     document.querySelector('#listaProdutos').appendChild(ul);
//                 }

//             })