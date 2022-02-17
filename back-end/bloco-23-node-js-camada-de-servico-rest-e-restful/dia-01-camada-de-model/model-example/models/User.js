const connection = require('./connection');

const infoValid = (firstName, lastName, email, password) => {
    if (!firstName) return "O campo 'firstName' é obrigatório" 
    if (!lastName) return "O campo 'lastName' é obrigatório" 
    if (!email) return "O campo 'email' é obrigatório" 
    if (!password) return "O campo 'password' é obrigatório"
    if (password.length < 6) return "O campo 'password' deve ter pelo menos 6 caracteres";
    return true;
}

const insertIntoTable = async (firstName, lastName, email, password) => {
    const [id] = await connection.execute(`INSERT INTO User
    (first_name, last_name, email, password) VALUES 
    (?, ?, ?, ? )`, [firstName, lastName, email, password]);
    return {
        id: id.insertId,
        firstName,
        lastName,
        email
    }
}

const idExists = async (id) => {
    const [ users ] = await connection.execute('SELECT idUser FROM user');
    const idInTable = users.some((usr) => usr.idUser === parseInt(id, 10));
    if (!idInTable) return false;
    return true;
}

const getUsers = async () => {
    const [users] = await connection.execute('SELECT * FROM User');
    return users
}

const getUserById = async (id) => {
    const [ user ] = await connection.execute('SELECT * FROM User WHERE idUser = ?', [id]);
    return user[0]
}

const updateUser = async (id, firstName, lastName, email, password) => {
    await connection.execute(`
    UPDATE User
    SET first_name = ?, last_name = ?, email = ?, password = ?
    WHERE idUser = ?`, [firstName, lastName, email, password, id]);
    const [user] = await connection.execute(`SELECT idUser, first_name, last_name, email
    FROM User WHERE idUser = ?`, [id]);
    return user
} 

module.exports = {
    infoValid,
    insertIntoTable,
    getUsers,
    idExists,
    getUserById,
    updateUser
}