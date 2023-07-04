const requisicao = new Request('http://localhost:3000/produtos');

        fetch(requisicao)
        .then(resposta => resposta.json())
        .then(resposta => {
            
            for(let i=0; i<2; i++){
                let linha = `<li>${resposta[i].id}</li>`;
                linha += `<li>${resposta[i].descricao}</li>`;
                linha += `<li>${resposta[i].preco}</li>`;

                const div = document.createElement("div");

                document.querySelector('#resposta').appendChild(div).innerHTML = linha;
            }
        });