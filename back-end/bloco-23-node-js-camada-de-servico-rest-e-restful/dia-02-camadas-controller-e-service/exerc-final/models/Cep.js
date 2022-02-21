const axios = require('axios')
const connection = require('./connection');
const getCep = async (cep) => {
    const formattedCep = cep.includes('-') ? `${cep.slice(0,5)}${cep.slice(6)}` : cep;
   const [ cepData ] = await connection.execute(`SELECT *
   FROM ceps WHERE cep = ?`, [formattedCep]);
    if (cepData.length === 0) {
        const obj = await getCepFromAPI(formattedCep);
        return obj;
    };
    return cepData[0]
}

const getCepFromAPI = async (cepInfo) => {
    const data = await axios.get(`https://viacep.com.br/ws/${cepInfo}/json/`);
    const info = data.data;
    if(info.erro) {
        const err = new Error('CEP não encontrado');
        err.code = 'notFound';
        err.status = 404;
        throw err
    }
    const { cep, logradouro, bairro, localidade, uf} = info;
   return ({
       cep,
       logradouro,
       bairro,
       localidade,
       uf
   })
}

const checkIfExists = async (cep) => {
    const formattedCep = `${cep.slice(0,5)}${cep.slice(6)}`;
    const [ cepData ] = await connection.execute(`SELECT *
    FROM ceps WHERE cep = ?`, [formattedCep]);
    if (cepData.length !== 0) {
        const err = new Error('CEP já existente');
        err.code = "alreadyExists";
        err.status = 409;
        throw err;
    }
    return false;
}

const addCEP = async (cepData) => {
    const { cep, logradouro, bairro, localidade, uf } = cepData;
    const formattedCep = `${cep.slice(0,5)}${cep.slice(6)}`;
    await connection.execute(`INSERT INTO ceps(cep, logradouro, bairro, localidade, uf)
    VALUES (?, ?, ?, ?, ?)`, [formattedCep, logradouro, bairro, localidade, uf]);
    return {
        cep,
        logradouro,
        bairro,
        localidade,
        uf
    }
}

module.exports = {
    getCep,
    checkIfExists,
    addCEP
}