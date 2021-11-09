const express = require('express');
const usuarios = require('./src/bancodedados');
const app = express();

app.use(express.json())

app.get("/usuarios", (req, res)=>{
    res.send(usuarios)
})

app.listen(8000)