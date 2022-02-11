const { expect } = require('chai');

function sum(a,b) {
    return a + b;
}

describe('Testa a soma' , () => {
    it('Testa a soma de 2 e 6', () =>  {
        expect(sum(2,6)).to.be.equals(8);
    })
})