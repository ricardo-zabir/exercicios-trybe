const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.reduce((acc,name)=> {
    let howManyAs = 0;
    for(let index = 0; index <= name.length; index += 1) {
      if(name[index] === 'a' || name[index] === 'A') {
        howManyAs += 1
      }
    }
      return acc + howManyAs;
    }
  ,0)};


assert.deepStrictEqual(containsA(), 20);