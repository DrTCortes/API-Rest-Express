const express = require('express')
const router = express()
const {allQuery, singleQuery, createData, modifyData, createOrModifyData, deleteData} = require('./controller')

router.get("/users", allQuery);

router.get("/users/:idQuery", singleQuery);

router.post("/users", createData);

router.patch("/users/:idQuery", modifyData);

router.put("/users/:idQuery", createOrModifyData);

router.delete("/users/:idQuery", deleteData);

module.exports = router