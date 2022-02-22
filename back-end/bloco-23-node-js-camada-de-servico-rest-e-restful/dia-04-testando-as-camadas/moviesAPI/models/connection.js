const mysql = require('mysql2');
require('dotenv').config();

const connection = mysql.createPool({
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    host: process.env.MYSQL_HOST,
    database: 'model_example'
});

module.exports = connection;