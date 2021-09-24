const randomNumber = () => {
  return Math.round(Math.random() * 100 );
}

const toUpperCase = (string) => string.toUpperCase();

const firstLetter = (string) => string[0];

const uniteStrings = (string1, string2) => `${string1}${string2}`;

const callPromise = (url) => {
  return new Promise((resolve, reject) => {
    fetch(url)
    .then((raw) => raw.json())
    .then((result) => {
      if(result !== undefined) {
        return resolve(result)
      }
      else return reject(result)
    })
  })
}



module.exports = {
  randomNumber,
  toUpperCase,
  firstLetter,
  uniteStrings,
  callPromise
}