//  Essa parte toda já fica pronta a partir do fetch economizando linhas do código
//const requisicao = new Request ('http://localhost:3000/produtos', {
//     method: 'GET', headers: {
//         'content-type': 'application/json'
//     }
// })

//parte do js que vai ler o arquivo json pelo metodo get
fetch('http://localhost:3000/produtos', {
    method: 'GET', headers: {
        'content-type': 'application/json'
    }
    })
    .then(resposta => resposta.json())
    .then(resposta => {
        for(i=0; i < resposta.length; i++){

            const ul = document.createElement('ul');
            ul.classList.add('produto')

            ul.appendChild(document.createElement('li'))
            .innerHTML = resposta[i].id;

            ul.appendChild(document.createElement('li'))
            .innerHTML = resposta[i].descricao;

            ul.appendChild(document.createElement('li'))
            .innerHTML = resposta[i].preco;

            document.querySelector('#listaProdutos').appendChild(ul);
        };
    });