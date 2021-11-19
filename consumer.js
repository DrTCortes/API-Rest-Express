const axios = require('axios')

function buscaLogradouro(cep){
    const responsePromise = axios.get(`https://viacep.com.br/ws/${cep}/json/`).then(
            (resp) => resp.data
        );

    return responsePromise;
}

async function buscaLogradouro2(cep){
    const responsePromise = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    return responsePromise.data.logradouro;
}

async function buscaBairros(ceps){
    const listaBairros = [];

    for(const cep of ceps){
        listaBairros.push(await buscaLogradouro2(cep))
    }
    console.log(listaBairros)
}

buscaBairros(["71300000", "41741510", "41740120"])
// buscaLogradouro("71300000").then((logradouro)=> console.log(logradouro))