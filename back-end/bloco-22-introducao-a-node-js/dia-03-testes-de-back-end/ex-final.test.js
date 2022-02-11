const { expect } = require('chai');
const fs = require('fs/promises');
const sinon = require('sinon');
const functions = require('./ex-final');

describe('Testa a função de verificar o sinal do número' , () => {
    describe('Testa se retorna negativo conforme esperado', () => {
        it('Testa se retorna negativo quando o número é - 1', () => {
            expect(functions.posOrNeg(-1)).to.equals('Negativo');
            expect(functions.posOrNeg(-1)).to.be.a('string');
        });
    });
    describe('Testa se retorna positivo conforme esperado', () => {
        it('Testa se retorna positivo com o número 2', () => {
            expect(functions.posOrNeg(2)).to.equals('Positivo');
            expect(functions.posOrNeg(2)).to.be.a('string');
        });
    });
    describe('Testa se retorna neutro conforme esperado', () => {
        it('Testa se retorna neutro quando o número é  0 ', () => {
            expect(functions.posOrNeg(0)).to.equals('Neutro');
            expect(functions.posOrNeg(0)).to.be.a('string');
        });
    });
    describe('Testa se retorna um erro caso o parâmetro não seja um número', () => {
        it('Exibe um erro caso o parâmetro seja uma string', () => {
            expect(() => {
                functions.posOrNeg('a')
            }).to.throw('o valor deve ser um número');
        })
    })
});

describe('Testa a função que escreve em um arquivo',  () => {
    before(() => {
        sinon.stub(functions,'writeOnFile').resolves('ok');
    })
    it('Testa se retorna o ok caso os dois parâmetros sejam passados corretamente', async () => {
        const result = await functions.writeOnFile('file2.txt','it worked !')
        expect(result).to.equals('ok');
    })
})

