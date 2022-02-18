const Cep = require('../services/Cep');

const getCep = (req, res, _next) => {
    const { cep } = req.params;
    if (!Cep.validateCEP(cep)) return res.status(400).json( 
        { "error": { "code": "invalidData", "message": "CEP inválido" } }
        )
        return res.status(200).json({message: 'ba'})
}

module.exports = {
    getCep
}