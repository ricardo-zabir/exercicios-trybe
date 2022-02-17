const connection = require('./connection');

const getAll = async () => {
    const [ books ] = await connection.execute('SELECT * FROM books');
    return books
}

const getByAuthorId = async (id) => {
    const [ books ] = await connection.execute(`SELECT * FROM books WHERE author_id = ${parseInt(id, 10)}`);
    return books
}

const bookIsValid = async (title, author_id) => {
    const titleIsValid = title && title.length >= 3;
    const [ idsOfAuthors ] = await connection.execute('SELECT  id FROM authors');
    const authorIdValid = author_id && idsOfAuthors.some((id) => id.id === author_id);
    if(!titleIsValid || !authorIdValid) {
        return false;
    }
    return true;
}

const getByBookId = async (id) => {
    const [ books ] = await connection.execute('SELECT * FROM books WHERE id = ?', [id]);
    return books
}

const createBook = async (title,author_id) => {
    await connection.execute('INSERT INTO books(title, author_id) VALUES ( ?, ?)',[title,author_id]);
}

module.exports = {
    getAll,
    getByAuthorId,
    getByBookId,
    bookIsValid,
    createBook
}