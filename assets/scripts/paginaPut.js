

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
}) //criação da lista de produtos
    .then(resposta => resposta.json())
    .then(resposta => {
        
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

            document.querySelector('#listaProdutos').appendChild(ul)
        }   
    });

    //Desafio 1 - clicar nos produtos e os valores irem para o formulário para fazer a atualização
document.querySelector('#listaProdutos' /*lista produtos é o id da ul onde estão os lis com os produtos*/).addEventListener('click', evento => {
    //console.log(evento.target); -> pode user sempre o console log pra verificar para onde o evento esta direcionado
    if(evento.target.closest('ul')/*Pode também ser colocado parentElement que será o pai do elemento */.classList.contains('produto')) {
        //console.log(evento.target);
        const elementoBase = evento.target.closest('ul'); //transformando a ul numa constante para facilitar

        document.querySelector('input#id').value = elementoBase.querySelector('[data-produto="id"]'/*para seletionar os atributos coloca-se []*/).innerHTML;

        document.querySelector('input#descricao').value = elementoBase.querySelector('[data-produto="descricao"]'/*para seletionar os atributos coloca-se []*/).innerHTML;

        document.querySelector('input#preco').value = elementoBase.querySelector('[data-produto="preco"]'/*para seletionar os atributos coloca-se []*/).innerHTML;
    }
});