const assert = require('assert');

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
  return  objectStudent = students.map((student,index) => {
    return {
      name: student,
      average: grades[index].reduce((acc,nota,idx) => {
        if(idx !== grades[index].length - 1) {
          return acc + nota;
        }
        else {
          return (acc+nota) / grades[index].length;
        }
      },0)
    }
  });
}

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

assert.deepStrictEqual(studentAverage(), expected);
