const express = require('express');
const pingHandler = require('./controllers/Ping');
const Cep = require('./controllers/Cep');

const app = express();

app.get('/ping', pingHandler);

app.get('/cep/:cep', Cep.getCep);

app.listen(3000, () => {
    console.log('Ouvindo na porta 3000')
})