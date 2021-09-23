const randomNumber = () => {
  return Math.round(Math.random() * 100 );
}

const toUpperCase = (string) => string.toUpperCase();

const firstLetter = (string) => string[0];

const uniteStrings = (string1, string2) => `${string1}${string2}`;



module.exports = {
  randomNumber,
  toUpperCase,
  firstLetter,
  uniteStrings,
}