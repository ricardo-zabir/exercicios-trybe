const  randomNumberGenerator = () => {
  const randomNumber = Math.round(Math.random() * 100);
  return randomNumber;
}

module.exports = {
  randomNumberGenerator
};