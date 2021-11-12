const express = require('express')
const router = express()
const {allQuery, singleQuery, createData, modifyData} = require('./controller')

router.get("/users", allQuery);

router.get("/users/:idQuery", singleQuery);

router.post("/users", createData);

router.patch("/users/:idQuery", modifyData);

module.exports = router