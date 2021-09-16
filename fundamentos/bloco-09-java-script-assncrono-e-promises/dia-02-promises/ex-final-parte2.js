const promise = new Promise((resolve,reject) => {
  const array = [];
    for(let index = 0; index < 10; index += 1) {
      let num = Math.round(Math.random() * 50 + 1);
      num *= num;
      array.push(num);
    }
    const sumOfAll = array.reduce((acc,num) => acc+num);
    if(sumOfAll < 8000) {
      resolve(divideByFourNumbers(sumOfAll))
        
        
    }
    else {
      return reject()
        
    }
})
.then((par) => console.log(par))
.then(() => console.log('Promise resolvida'))
.catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada'))

function divideByFourNumbers(num) {
  let array = [];
  array[0] = num/2;
  array[1] = num/3;
  array[2] = num/5;
  array[3] = num/10;
  return array;
}