let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] < numbers[secondIndex]) {
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
    }
  }
}
console.log(numbers);
for ( index = 1; index < numbers.length; index += 1) {
  for (secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] > numbers[secondIndex]) {
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
    }
  }
}
console.log(numbers);
numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
console.log(numbers);
for(i=0;i<numbers.length;i+=1) {
  if(i != numbers.length-1) {
  numbers[i] *= numbers[i+1]; }
  else {numbers[i]=numbers[i]*2;}
}
console.log(numbers);