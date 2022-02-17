const express = require('express');
const Author = require('./models/Author');
const Book = require('./models/Book');
const User = require('./models/User');

const app = express();
app.use(express.json());

app.get('/authors', async(_req, res, _next) => {
    const authors  = await Author.getAuthors();
    return res.status(200).json(authors)
})

app.get('/books', async(req, res, _next) => {
    const { author_id } = req.query;
    const books = await Book.getByAuthorId(author_id);
    return res.status(200).json(books);
})

app.get('/books/:id', async(req, res, _next) => {
    const { id } = req.params;
    const books = await Book.getByBookId(parseInt(id));
    if (books.length === 0 ) return res.status(404).json({ message: 'Book not found'})
    return res.status(200).json(books[0])
})

app.post('/books', async(req,res,_next) => {
    const {title, author_id } = req.body;
    if(await Book.bookIsValid(title, parseInt(author_id, 10)) === false) {
        return res.status(400).json({message: 'Dados inválidos'})
    }
    await Book.createBook(title, parseInt(author_id, 10));
    return res.status(201).json({message: 'Livro criado com sucesso! '})
})

app.post('/user', async(req,res) => {
    const { firstName, lastName, email, password } = req.body;
    const valid = User.infoValid(firstName, lastName, email, password);
    if (valid !== true) {
        return res.status(400).json({
            error: true,
            message: valid
        });
    }
    const inserted = await User.insertIntoTable(firstName, lastName, email, password);
    return res.status(201).json(inserted);

});

app.get('/user', async (_req,res, _next) => {
    const users = await User.getUsers();
    return res.status(200).json(users);

});

app.get('/user/:id', async (req, res, _next) => {
    const { id } = req.params;
    const idExists = await User.idExists(id);
    if (!idExists) return res.status(404).json({
        error: true,
        message: 'Usuário não encontrado'

    });
    const user = await User.getUserById(id);
    return res.status(200).json(user)
});

app.put('/user/:id', async (req, res, _next) => {
    const { firstName, lastName, email, password } = req.body;
    const valid = User.infoValid(firstName, lastName, email, password);
    if (valid !== true) {
        return res.status(400).json({
            error: true,
            message: valid
        });
    }
    const { id } = req.params;
    const idExists = await User.idExists(id);
    if (!idExists) return res.status(404).json({
        error: true,
        message: 'Usuário não encontrado'

    });
    const newUser = await User.updateUser(id, firstName, lastName, email, password);
    return res.status(200).json(newUser);
})

app.listen(3000, () => {
    console.log('Ouvindo na porta 3000')
})