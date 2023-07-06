const requisicao = new Request ('http://localhost:3000/produtos', {
    method: 'GET', headers: {
        'content-type': 'application/json'
    }
})