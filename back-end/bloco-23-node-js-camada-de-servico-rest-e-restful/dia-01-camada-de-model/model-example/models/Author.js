const connection = require('./connection');

const serialize = (auth) => ({
        firstName: auth.first_name,
        middleName: auth.middle_name,
        lastName: auth.last_name,
    });

const getFullName = (auth) => {
    const fullName = auth.middleName ? [auth.firstName,auth.middleName,auth.lastName].join(' ') :
    [auth.firstName,auth.lastName].join(' ');
    return {
        ...auth,
        fullName,
    }
}


const getAuthors = async () => {
    const [authors] = await connection.execute('SELECT first_name, middle_name, last_name FROM authors');
    return authors.map((auth) => serialize(auth)).map((auth) => getFullName(auth))
}

module.exports = {
    getAuthors
}