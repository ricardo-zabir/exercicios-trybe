const Cep = require('../models/Cep');
const Joi = require('joi');
const validateCEP = async (cep) => {
    if (!cep || !cep.match(/^[0-9]{5}-?[0-9]{3}$/)) {
        const err = new Error('CEP inválido');
        err.code = 'invalidData';
        err.status = 400;
        throw err;
    };
    return await Cep.getCep(cep)
}

const registerCEPValid = async (cepData) => {
    console.log('aaaaaaa')
    const { error } = Joi.object({
        cep: Joi.string().not().empty().pattern(/^[0-9]{5}-[0-9]{3}$/).required(),
        logradouro: Joi.string().not().empty().required(),
        bairro: Joi.string().not().empty().required(),
        localidade: Joi.string().not().empty().required(),
        uf: Joi.string().not().empty().required()
    }).validate(cepData)
    if (error) {
        const err = new Error(error.message);
        err.code = 'invalidData';
        err.status = 400;
        throw err
    }
    await checkIfExists(cepData);
    return await Cep.addCEP(cepData);
}

const checkIfExists = async (cepData) => {
    const exists = await Cep.checkIfExists(cepData.cep);
    return exists;
}

module.exports = {
    validateCEP,
    registerCEPValid
}