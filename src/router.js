const express = require('express')
const router = express()
const {allQuery, singleQuery, createData} = require('./controller')

router.get("/users", allQuery);

router.get("/users/:idQuery", singleQuery);

router.post("/users", createData);

module.exports = router