"use strict";
const checkAge = (year, month, day) => {
    const today = new Date();
    let age = today.getFullYear() - year;
    if ((today.getMonth() + 1) < month || (month === (today.getMonth() + 1) && today.getDate() < day)) {
        age -= 1;
    }
    if (age >= 120)
        return false;
    return true;
};
class Person {
    constructor(name, birth_date) {
        this.validatePerson(name, birth_date);
        this._name = name;
        this._birth_date = birth_date;
    }
    get name() {
        return this._name;
    }
    set name(v) {
        this._name = v;
    }
    get birth_date() {
        return this._birth_date;
    }
    set birth_date(v) {
        this._birth_date = v;
    }
    validatePerson(name, birth_date) {
        const currentDate = new Date();
        const thisYear = currentDate.getFullYear();
        const thisMonth = currentDate.getMonth() + 1;
        const thisDay = currentDate.getDate();
        if (name.length < 3) {
            throw new Error('Nome não pode ter menos de 3 caracteres');
        }
        const year = birth_date.getFullYear();
        const month = birth_date.getMonth() + 1;
        const day = birth_date.getDate();
        if (year > thisYear ||
            (year === thisYear && month > thisMonth) ||
            (year === thisYear && month === thisMonth && day > thisDay)
            || !(checkAge(year, month, day))) {
            throw new Error('Data inválida');
        }
        return true;
    }
}
class Student extends Person {
    constructor(name, birth_date) {
        super(name, birth_date);
        this._enrollment = '';
        this._exameGrades = [];
        this._workGrades = [];
        this.generateEnrollment();
    }
    generateEnrollment() {
        this._enrollment = '1234567890123456';
    }
    set enrollment(v) {
        if (v.length !== 16)
            throw new Error('A matrícula deve ter 16 digitos');
        this._enrollment = v;
    }
    get exameGrades() {
        return this.exameGrades;
    }
    get workGrades() {
        return this._workGrades;
    }
    set exameGrades(v) {
        if (v.length > 4)
            throw new Error('No máximo 4 notas de provas são permitidas');
        this._exameGrades = v;
    }
    set workGrades(v) {
        if (v.length > 2)
            throw new Error('No máximo 2 notas de trabalho são permitidas');
        this._workGrades = v;
    }
    get enrollment() {
        return this._enrollment;
    }
    get sumGrades() {
        const workGradesSum = this._workGrades.reduce((prev, curr) => prev + curr, 0);
        const exameGradesSum = this._exameGrades.reduce((prev, curr) => prev + curr, 0);
        return workGradesSum + exameGradesSum;
    }
    get sumAverageGrade() {
        const workGradesSum = this._workGrades.reduce((prev, curr) => prev + curr, 0);
        const exameGradesSum = this._exameGrades.reduce((prev, curr) => prev + curr, 0);
        return (workGradesSum + exameGradesSum) / (this._workGrades.length + this._exameGrades.length);
    }
}
const carolina = new Student('Carolina da Silva', new Date('2005/03/17'));
const lucas = new Student('Lucas Peixoto Salgueiro', new Date('2006/07/19'));
const jessica = new Student('Jéssica Bianca Nunes', new Date('2004/06/06'));
const tamires = new Student('Tamires Santos Bastos', new Date('2005/11/05'));
const fernando = new Student('Fernando Gonçalves', new Date('2006/09/11'));
carolina.exameGrades = [25, 20, 25, 23];
lucas.exameGrades = [25, 20, 25, 23];
jessica.workGrades = [50, 45];
tamires.workGrades = [47, 42];
console.log(carolina);
console.log(lucas);
console.log(jessica);
console.log(tamires);
console.log(fernando);
