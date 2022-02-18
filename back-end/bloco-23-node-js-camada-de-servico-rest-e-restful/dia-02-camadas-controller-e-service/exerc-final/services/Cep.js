const Cep = require('../models/Cep');
const validateCEP = (cep) => {
    if (!cep) return false;
    if (!cep.match(/^[0-9]{5}-?[0-9]{3}$/)) return false;
    return true
}

module.exports = {
    validateCEP
}