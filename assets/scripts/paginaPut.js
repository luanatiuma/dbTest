document.querySelector('#btAtualizar').addEventListener('click', () => {

    const dados = {
        'id': null,
        'descricao': document.querySelector('#descricao').value,
        'preco': document.querySelector('#preco').value
    }

    const id = document.querySelector('#id').value;
    // {} em inglês = 'curly braces'
    fetch(`http://localhost:3000/produtos/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
    .then(resposta => {
        if(resposta.ok) {
            alert('Produto atualizado');
            location.reload(); // jeito porcão, depois vamos melhorar (promise)
        }
    });

});

// Busca os produtos
fetch('http://localhost:3000/produtos', {
    method: 'GET',
    headers: {
        'Content-type': 'application/json'
    }
})
    .then(resposta => resposta.json())
    .then(resposta => {
        
        for(let i = 0; i < resposta.length; i++) {

            const ul = document.createElement('ul');
            ul.classList.add('produto');

            ul.appendChild(document.createElement('li')).innerHTML = resposta[i].id;
            ul.appendChild(document.createElement('li')).innerHTML = resposta[i].descricao;
            ul.appendChild(document.createElement('li')).innerHTML = resposta[i].preco;
            
            document.querySelector('#listaProdutos').appendChild(ul);
        }
        
    });