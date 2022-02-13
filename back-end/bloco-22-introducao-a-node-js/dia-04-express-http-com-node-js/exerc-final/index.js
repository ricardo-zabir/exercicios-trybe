const express = require('express');
const app = express();
const fs = require('fs/promises');
const ping = require('./controllers/ping');
const crypto = require('crypto');

app.use(express.json());

// Ex.1
app.use('/ping',ping);
// Ex. Bônus 1
app.use((req,res,next) => {
    const token = req.headers.authorization;
    if(token !== undefined && token.length === 16) {
        next()
    }
    else {
        return res.status(401).json({message: 'Token inválido'});
    }
}
);
// Ex.2
app.post('/hello', (req,res,_) => {
    const { name } = req.body;
    return res.status(200).send(`Hello, ${name}`);
});
// Ex.3
app.post('/greetings', (req,res) => {
    const { name, age } = req.body;
    if(parseInt(age) > 17) {
        return res.status(200).json({message: `Hello, ${name}`});
    }
    else {
        return res.status(401).json({message: "Unauthorized"});
    }
});
// Ex.4
app.put('/users/:name/:age', (req,res) => {
    const { name, age } = req.params;
    return res.status(200).json({message: `Seu nome é ${name} e você tem ${age} anos de idade`});
});
// Ex.6
app.get('/simpsons', async (req,res) => {
    try{
        const simpsonsContent = await fs.readFile('./simpsons.json');
        return res.status(200).send(simpsonsContent);
    }
    catch(e){
        return res.status(500).json({message: 'Não foi possível ler o arquivo'});
    }
});
// Ex.7
app.get('/simpsons/:id',async  (req, res) => {
    const { id } = req.params;
    try {
        const simpsonsContent = await fs.readFile('./simpsons.json');
        const arrOfSimspons = JSON.parse(simpsonsContent);
        const simpson = arrOfSimspons.find((s) => s.id === id);
        if(simpson) {
            return res.status(200).json(simpson);
        }
        return res.status(404).json({message: 'simpson not found'});
    }
    catch(e){
        return res.status(500).json({message: 'Não foi possível ler o arquivo'});;
    }
});
// Ex.8
app.post('/simpsons', async(req,res) => {
    const { id, name } = req.body;
    try {
        const simpsonsContent = await fs.readFile('./simpsons.json','utf-8');
        const arrOfSimspons = JSON.parse(simpsonsContent);
        const idExists = arrOfSimspons.some((s) => s.id === id);
        if(idExists){
            return res.status(409).json({message: 'id already exists'})
        }
        else {
            arrOfSimspons.push({id,name});
            try {
                await fs.writeFile('simpsons.json',JSON.stringify(arrOfSimspons));
            }
            catch(e) {
                return res.status(500).json({message: e})
            }
            return res.status(204).end();
        }
    }
    catch(e) {
        return res.status(500).json({message: e.message});;
    }

});
// Ex. Bônus 2
app.post('/signup', (req,res) => {
    const { email, password, firstName, phone } = req.body;
    if(email === undefined || password === undefined || firstName === undefined ||
        phone === undefined){
            return res.status(401).json({message: 'missing fields'})
        }
    else {
        const randomToken = crypto.randomBytes(8).toString('hex');
        return res.status(200).json({token: randomToken});
    }
})
app.listen(3000,() => {
    console.log('App rodando na porta 3000');
});