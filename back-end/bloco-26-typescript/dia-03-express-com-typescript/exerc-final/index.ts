import express from 'express';
import router from './routes/ProductRouter';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/product', router);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));