const userList = require('./database');

function allQuery(req, res){
    res.json(userList);
}

function singleQuery(req, res){
    const user = userList.find(
        (user) => user.id == Number(req.params.idQuery)
    );

    if(!user){
        res.status(404);
        res.json({ error: 'Usuario ' + req.params.idQuery + ' não foi encontrado'})
        return
    }

    res.json(user);
}



module.exports = {allQuery, singleQuery}