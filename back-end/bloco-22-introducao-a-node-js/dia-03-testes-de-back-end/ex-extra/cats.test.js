const { expect, assert } = require('chai');
const cats = require('./cats');
const axios = require('axios');
const sinon = require('sinon');
describe('Testa a função de buscar as imagens de gatinhos', () => {
    describe('Se o parâmetro da funcão não for um número', () => {
        it('1- Levanta um erro caso o parâmetro não seja um número', async () => {
            try {
                await cats('a');
                assert(false);
            }
            catch(e) {
                assert(true, 'Parâmetro inválido');
            }
        });
    });
    describe('2- Se N == 0', () => {
        beforeEach(() => {
            sinon.stub(axios,'get').resolves('a');
        })
        afterEach(() => {
            axios.get.restore();
        })
        it('Retorna um array vazio', async () => {
            expect(await cats(0)).to.deep.equal([]);
        });
        it('Chama a API 0 vezes', async () => {
            const zeroResults = await cats(0);
            expect(axios.get.callCount).to.equals(0);
        });
    });
    describe('3- Se N > 0', () => {
        beforeEach(() => {
            sinon.stub(axios,'get').resolves([{
                breeds:[],
                id:"MTkyMzUxMA",
                url:"https://cdn2.thecatapi.com/images/MTkyMzUxMA.jpg",
                width:1929,
                height:2315}]);
        })
        afterEach(() => {
            axios.get.restore();
        })
        it('Cada objeto deve ter as propriedades: url, width, height ', async () => {
            const images = await cats(2);
            images.forEach((img) => expect(img).to.have.property('url')
            && expect(img).to.have.property('width')
            && expect(img).to.have.property('height'))
        });
        it('A imagem em URL deve ter extensão .jpg' , async () => {
            const images = await cats(3);
            images.forEach((img) => expect(img['url'].includes('.jpg')).to.equals(true));
        });
        it('As propriedades width e height são números', async () => {
            const images = await cats(4);
            images.forEach((img) => expect(img['height']).to.be.a('number') && expect(img['width']).to.be.a('number'));
        });
        it('A função foi chamada N vezes', async () => {
            const images = await cats(5);
            expect(axios.get.callCount).to.equals(5);
        });
    });
    describe('4- Se a API falhar, retorna um array vazio ', () => {
        beforeEach(() => {
            sinon.stub(Promise,'all').rejects('API indisponível');
        })
        afterEach(() => {
            Promise.all.restore();
        })
        it('Retorna um array vazio quando a API falha', async () => {
            const failedRequisition = await cats(1);
            expect(failedRequisition).to.deep.equal([]);
        })
    })
    describe('BONUS- Verfica se o Promise.All retorna um array de objetos', () => {
        beforeEach(() => {
            sinon.stub(Promise,'all').resolves([{},{},{},{},{}])
        })
        it('O Promise.All é chamado', async () => {
            const images = await cats(5)
            expect(Promise.all.callCount).to.be.greaterThan(0);
        })
    })
})