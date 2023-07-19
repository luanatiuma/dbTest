
//parte do js que vai publicar na página post com o botão de cadastrar

function publicarProdutos() {
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
    if(resposta.ok) {
        alert('Produto cadastrado')
    }
})
});

function verificaSeInput () {
    const idPreenchido = document.querySelector('input#id').value !== "";
    const descricaoPreenchido = document.querySelector('input#descricao').value !== "";
    const precoPreenchido = document.querySelector('input#preco').value !== "";

    if(descricaoPreenchido || precoPreenchido){
    document.querySelector('button.button2').removeAttribute('disabled');
    document.querySelector('button#buttonCadastro').removeAttribute('disabled');
    }
    else {
    document.querySelector('button.button2').setAttribute('disabled', '');
    document.querySelector('button#buttonCadastro').setAttribute('disabled', '');
    };

};

document.querySelector('form').addEventListener('reset', ()=>{
    document.querySelector('button.button2').setAttribute('disabled', '');
});

document.querySelector('form').addEventListener('input' /*ou keyup*/, ()=> {
    verificaSeInput();
});
};

export{publicarProdutos};
