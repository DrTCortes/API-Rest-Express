const express = require('express')
const router = express()
const {allQuery, singleQuery} = require('./controller')

router.get("/users", allQuery);

router.get("/users/:idQuery", singleQuery);

module.exports = router