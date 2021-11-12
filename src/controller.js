const userList = require('./database');

function allQuery(req, res){
    res.json(userList);
}

module.exports = {allQuery}