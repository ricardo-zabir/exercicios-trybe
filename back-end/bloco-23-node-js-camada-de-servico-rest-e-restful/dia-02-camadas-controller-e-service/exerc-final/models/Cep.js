const connection = require('./connection');
const getCep = async (cep) => {
   const [ cep ] = await connection.execute(`SELECT *
   FROM ceps WHERE cep = ?`, [cep]);
    if(!cep) return false;
    return cep

}

module.exports = {
    getCep,
}