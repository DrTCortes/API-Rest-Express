const express = require("express");
const axios = require("axios")
const app = express();

app.get("/descricao/:pacote", async (req, res)=>{
    const peckage = req.params.peckage;

    response = await axios.get(`https://registry.npmjs.com/${peckage}`);
    
    res.json({
        name: `Descrição do pacote: '${peckage}'`,
        description: response.data.description
    })
});


module.exports = app