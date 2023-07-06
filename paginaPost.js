//parte do js que vai publicar na página post com o botão de cadastrar

document.querySelector('#buttonCadastro').addEventListener('click', ()=>{

    const dados = {
        'id': null,
        'descricao': document.querySelector('#descricao').value,
        'preco': document.querySelector('#preco').value,
    }

    fetch('http://localhost:3000/produtos', {method: 'POST', 
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(dados)
})
.then(resposta => {
    console.log(resposta)
})
});