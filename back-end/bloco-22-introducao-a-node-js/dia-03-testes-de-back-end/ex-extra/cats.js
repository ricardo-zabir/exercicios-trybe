const axios = require('axios'); 
async function cats(param) {
    if(typeof param !== 'number') {
        throw new Error('Parâmetro inválido')
    }
    if(param === 0) {
        return [];
    }
    let promises = [];
    for(let i = 0;i < param;i ++) {
        const img = axios.get('https://api.thecatapi.com/v1/images/search');
        promises.push(img);
    }
    try {
        const results = await Promise.all(promises);
        const resultsArr = results.map((res) => res[0]);
        return resultsArr;
    }
    catch(e) {
        return [];
    }
}

module.exports = cats;