const axios = require('axios')

function buscaLogradouro(cep){
    const responsePromise = axios.get(`https://viacep.com.br/ws/${cep}/json/`).then(
            (resp) => resp.data
        );

    return responsePromise;
}

buscaLogradouro("71300000").then((logradouro)=> console.log(logradouro))