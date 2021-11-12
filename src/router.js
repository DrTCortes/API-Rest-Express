const express = require('express')
const router = express()
const {allQuery, singleQuery, createData, modifyData, deleteData} = require('./controller')

router.get("/users", allQuery);

router.get("/users/:idQuery", singleQuery);

router.post("/users", createData);

router.patch("/users/:idQuery", modifyData);

router.delete("/users/:idQuery", deleteData);

module.exports = router