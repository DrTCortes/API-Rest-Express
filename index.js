const express = require('express');
const app = express();
const router = require('./src/router')
const axios = require('./src/router-axios')

app.use(express.json());

app.use(router)

app.use(axios)

app.listen(8001)
