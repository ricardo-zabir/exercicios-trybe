const express = require('express');
const { Book } = require('./models')

const app = express();
app.use(express.json());
app.get('/books', async (_req, res, _next) => {
    try {
        const data = await Book.findAll();
        return res.status(200).json(data);
    }
    catch(e) {
        return res.status(500).json({ message: 'Algo deu errado'})
    }
});
app.get('book/:id', async (req, res, _next) => {
    const data = await Book.findByPk(req.params.id);
    try {
        if(!data) return res.status(404).json({message: 'Nenhum livro encontrado'});
        return res.status(200).json(data); 
    }
    catch(e) {
        return res.status(500).json({ message: 'Algo deu errado'})
    }
});
app.post('/books', async (req, res, _next) => {
    const { title, author, pageQuantity } = req.body;
    try {
        const data = await Book.create({ title, author, pageQuantity,});
        return res.status(201).json(data)
    }
    catch(e) {
        return res.status(500).json({ message: 'Algo deu errado'})
    }
});

app.put('/book/:id', async (req, res, _next) => {
    const { id } = req.params;
    const { title, author, pageQuantity } = req.body;
    try {
        const data = await Book.update({
            title,
            author,
            pageQuantity
        }, {
            where: {
                id
            }
        });
        return res.status(200).json(data);
    }
    catch(e) {
        return res.status(500).json({ message: 'Algo deu errado'})
    }
});

app.delete('/book/:id', async (req, res, _next) => {
    const { id } = req.params;
    try {
        const data = await Book.destroy({
            where: {
                id
            }
        });
        return res.status(200).json(data);
    }
    catch(e) {
        return res.status(500).json({ message: 'Algo deu errado'})
    }
})

app.listen(3000, () => {
    console.log('Ouvindo na porta 3000');
})