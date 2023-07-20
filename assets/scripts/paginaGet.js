//  Essa parte toda já fica pronta a partir do fetch economizando linhas do código
//const requisicao = new Request ('http://localhost:3000/produtos', {
//     method: 'GET', headers: {
//         'content-type': 'application/json'
//     }
// })

//parte do js que vai ler o arquivo json pelo metodo get
function buscaProdutos(mostraBtDelete){
    fetch('http://localhost:3000/produtos', {
    method: 'GET', headers: {
        'content-type': 'application/json'
    }
    })
    .then(resposta => resposta.json())
    .then(resposta => {

        document.querySelector('#listaProdutos').innerHTML = '';

        for(let i = 0; i < resposta.length; i++) {

            const ul = document.createElement('ul');
            ul.id = resposta[i].id;
            ul.classList.add('produto');
            
            const liId = document.createElement('li');
            liId.setAttribute('data-produto', 'id');
            liId.innerHTML = resposta[i].id;
            liId.classList.add('produto-id');
            
            const liDescricao = document.createElement('li');
            liDescricao.setAttribute('data-produto', 'descricao');
            liDescricao.innerHTML = resposta[i].descricao;
            
            const liPreco = document.createElement('li');
            liPreco.setAttribute('data-produto', 'preco');
            liPreco.innerHTML = resposta[i].preco;
            
            ul.append(liId, liDescricao, liPreco);

            if(mostraBtDelete === true){
                const liDelete = document.createElement('li');
                const btDelete = document.createElement('button');
                btDelete.innerHTML = '❌';
                btDelete.value = resposta[i].id;
                btDelete.classList.add('delete-button');

                ul.appendChild(liDelete).appendChild(btDelete);
            }
            
            document.querySelector('#listaProdutos').appendChild(ul)
        };
    });
};

export {buscaProdutos};
