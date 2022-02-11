const { expect } = require('chai');
const fs = require('fs/promises');
const leArquivo = require('./index');
const sinon = require('sinon');
describe('leArquivo', () => {
    describe('Quando o arquivo existe', () => {
        before(() => {
            sinon.stub(fs,'readFile').returns("Hello World");
        })
        after(() => {
            fs.readFile.restore();
        })
      describe('a resposta', () => {
        it('é uma string', () => {
            const trueFile = "file1.txt"
          expect(leArquivo(trueFile)).to.be.a('string');
        });
  
        it('é igual ao conteúdo do arquivo', () => {
            const rightString = 'Hello World'
          expect(leArquivo('file1.txt')).to.be.equals(rightString);
        });
      });
    });
  
    describe('Quando o arquivo não existe', () => {
        before(() => {
            sinon.stub(fs,'readFile').throws(new Error("Arquivo não existe"))
        })
      describe('a resposta', () => {
        it('é igual a "null"', () => {
          const fakeFile = 'naoexiste.txt';
          expect(leArquivo(fakeFile)).to.be.equal(null);
        });
      });
    });
  });