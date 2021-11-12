const express = require('express')
const router = express()
const {allQuery} = require('./controller')

router.get("/users", allQuery);

module.exports = router