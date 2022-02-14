const express = require('express');
const userController = require('./controllers/userController');
const bitcoinController = require('./controllers/bitcoinController');
const postsController = require('./controllers/postsController');
const errorMiddleware = require('./middlewares/errorMiddleware');
const teamsController = require('./controllers/teamsController');

const app = express();
app.use(express.json())

app.use('/user',userController);
app.use('/btc', bitcoinController);
app.use('/posts', postsController);
app.use('/teams',teamsController);
app.all('*', errorMiddleware)

app.listen(3000, () => {
    console.log('Escutando na porta 3000');
})