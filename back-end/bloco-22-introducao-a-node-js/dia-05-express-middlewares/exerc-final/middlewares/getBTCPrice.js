const axios = require('axios');
module.exports = async (req,res,_next) => {
    const { authorization } = req.headers;
    const tokenValid = authorization && authorization.length === 12;
    if(!tokenValid) {
        return res.status(401).json({message: 'invalid token'})
    }
    try {
        const BTCPrice = await axios.get('https://api.coindesk.com/v1/bpi/currentprice/BTC.json)');
        return res.status(200).json(BTCPrice.data);
    }
    catch(e) {
        return res.status(500).json({message: e.message})
    }
}