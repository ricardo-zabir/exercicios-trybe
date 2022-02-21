const Cep = require('../services/Cep');

const getCep = async (req, res, _next) => {
    const { cep } = req.params;
    const cepData = await Cep.validateCEP(cep);
    return res.status(200).json(cepData);
}

const postCep = async (req, res, _next) => {
    const { cep, logradouro, bairro, localidade, uf } = req.body;
    const cepData = await Cep.registerCEPValid({
        cep,
        logradouro,
        bairro,
        localidade,
        uf
    });
    return res.status(201).json(cepData)
}

module.exports = {
    getCep,
    postCep
}