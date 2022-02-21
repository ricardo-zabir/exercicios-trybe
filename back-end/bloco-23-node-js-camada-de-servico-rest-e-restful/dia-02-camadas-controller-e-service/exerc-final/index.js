const express = require('express');
const pingHandler = require('./controllers/Ping');
const Cep = require('./controllers/Cep');
const errorMiddleware = require('./middlewares/errorMiddleware');
const rescue = require('express-rescue');

const app = express();

app.use(express.json());

app.get('/ping', rescue(pingHandler));

app.get('/cep/:cep', rescue(Cep.getCep));

app.post('/cep', rescue(Cep.postCep));

app.use(errorMiddleware);

app.listen(3000, () => {
    console.log('Ouvindo na porta 3000')
})