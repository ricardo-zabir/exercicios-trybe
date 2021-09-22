function encode(string) {
  let codedString = string.replace(/a/g,"1");
  codedString = codedString.replace(/e/g, "2");
  codedString = codedString.replace(/i/g , "3");
  codedString = codedString.replace(/o/g , "4");
  codedString = codedString.replace(/u/g , "5");
  return codedString;
}

function decode(string) {
  let decodedString = string.replace(/1/g,"a");
  decodedString = decodedString.replace(/2/g, "e");
  decodedString = decodedString.replace(/3/g , "i");
  decodedString = decodedString.replace(/4/g , "o");
  decodedString = decodedString.replace(/5/g , "u");
  return decodedString;
}

function techList(techNames, name) {
  let sortTechNames = techNames.sort();
  let objectContainer = [];
  techNames.forEach((tech,idx) => {
    let objeto = {
      tech: sortTechNames[idx],
      name,
    }
    objectContainer.push(objeto);
  });
  if(techNames.length === 0){return 'Vazio!'}
  else{
  return objectContainer;}
}

function hydrate(drinks) {
  let numbersDrink = drinks.match(/\d/g);
  numbersDrink = numbersDrink.join('');
  let container = [];
  let waterGlasses = 0;
  for (let index = 0; index < numbersDrink.length; index += 1) {
    container.push(numbersDrink[index]);
  }
  container = container.map((item) => parseInt(item,10));
  waterGlasses = container.reduce((acc,item) => acc+item);
  if (waterGlasses === 1) { return '1 copo de água'; }
  return `${waterGlasses} copos de água`;
  }

module.exports = {
  encode,
  decode,
  techList,
  hydrate,
}