const express = require('express');
const usuarios = require('./src/bancodedados');
const app = express();

app.use(express.json())

app.listen(8000)