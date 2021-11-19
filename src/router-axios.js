const express = require("express");
const axios = require("axios")
const app = express();

app.get("/descricao/:pacote", (req, res)=>{
    const pacote = req.params.pacote;

    axios.get(`https://registry.npmjs.com/${pacote}`).then((response)=>{
        res.json({
            nome: `Descrição do pacote: '${pacote}'`,
            descricao: response.data.description
        })
    });
})


module.exports = app