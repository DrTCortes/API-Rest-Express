const userList = require('./database');

let nextId = userList.length +1;
let professoesValidas = ["logica", "ui/ux", "front-end", "back-end", "full-stack", "mobile", "soft-skills"];

function validateUser(user){
    console.log(user.profissao)
    if(!user.nome || typeof user.nome !== "string"){
        return'O campo "nome" deve ser preenchido corretamente';
    }

    if(!user.idade || typeof user.idade != "number" || user.idade < 18){
        return'O campo "idade" deve ser preenchido corretamente';
    }

    if(!user.profissao || typeof user.profissao != "string" || !professoesValidas.includes(user.profissao.toLowerCase())){
        return'O campo "profissão" deve ser preenchido corretamente';
    } 
}

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

function createData(req, res){
    const error = validateUser(req.body)

    if(error){
        res.status(400);
        res.json(error);
        return;
    }

    const newUser = {
        id: nextId,
        nome: req.body.nome,
        idade: req.body.idade,
        profissao: req.body.profissao
    };

    userList.push(newUser);
    nextId += 1;

    res.json(userList);
}

module.exports = {allQuery, singleQuery, createData}