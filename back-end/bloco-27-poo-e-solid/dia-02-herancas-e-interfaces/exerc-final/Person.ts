const checkAge = (year: number, month: number, day:number):boolean => {
    const today = new Date();
    let age = today.getFullYear() - year;
    if((today.getMonth() + 1) < month || (month === (today.getMonth() + 1) && today.getDate() < day)) {
        age -= 1
    }
    if(age >= 120) return false
    return true
}


class Person {
    private _name: string;
    private _birth_date: Date;
    constructor(name:string, birth_date:Date) {
        this.validatePerson(name, birth_date);
        this._name = name;
        this._birth_date = birth_date;
    }
    public get name() : string {
        return this._name
    }
    public set name(v : string) {
        this._name = v;
    }
    public get birth_date() : Date {
        return this._birth_date
    }
    public set birth_date(v : Date) {
        this._birth_date = v;
    }
    private validatePerson(name:string, birth_date: Date): boolean {
        const currentDate = new Date();
        const thisYear = currentDate.getFullYear();
        const thisMonth = currentDate.getMonth() + 1;
        const thisDay = currentDate.getDate();
        if(name.length < 3) {
            throw new Error('Nome não pode ter menos de 3 caracteres')
        }
        const year = birth_date.getFullYear();
        const month = birth_date.getMonth() + 1;
        const day = birth_date.getDate();
        if(year > thisYear ||
            (year === thisYear && month > thisMonth) ||
            (year === thisYear && month === thisMonth && day > thisDay)
            || !(checkAge(year, month, day))){
                throw new Error('Data inválida')
        }
        return true
    }
}

class Student extends Person {
    private _enrollment: string = '';
    private _exameGrades: number[] = [];
    private _workGrades: number[] = [];
    constructor(name: string, birth_date: Date,) {
        super(name, birth_date);
        this.generateEnrollment();
    }
    private generateEnrollment() {
        this._enrollment = '1234567890123456';
    }
    public set enrollment(v : string) {
        if(v.length !== 16) throw new Error('A matrícula deve ter 16 digitos');
        this._enrollment = v;
    }
    public get exameGrades() : number[] {
        return this.exameGrades
    }
    public get workGrades() : number[] {
        return this._workGrades
    }
    public set exameGrades(v : number[]) {
        if(v.length > 4) throw new Error('No máximo 4 notas de provas são permitidas')
        this._exameGrades = v;
    }
    public set workGrades(v : number[]) {
        if(v.length > 2) throw new Error('No máximo 2 notas de trabalho são permitidas')
        this._workGrades = v;
    }
    public get enrollment() : string {
        return this._enrollment
    }
    public get sumGrades(): number {
        const workGradesSum = this._workGrades.reduce((prev, curr) => prev + curr, 0);
        const exameGradesSum = this._exameGrades.reduce((prev, curr) => prev + curr, 0);
        return workGradesSum + exameGradesSum
    }
    public get sumAverageGrade():number {
        const workGradesSum = this._workGrades.reduce((prev, curr) => prev + curr, 0);
        const exameGradesSum = this._exameGrades.reduce((prev, curr) => prev + curr, 0);
        return (workGradesSum + exameGradesSum) / (this._workGrades.length + this._exameGrades.length)
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

interface Employee {
    registration: string;
    salary: number;
    admissionDate: Date;
    generateRegistration():string;
}

class Subject {
    private _name: string
    constructor(name: string) {
        if(name.length < 3) throw new Error('Nome deve possuir mais de 3 caracteres')
        this._name = name;
    }
    public get name() : string {
        return this._name
    }
    public set name(v : string) {
        this._name = v;
    }
}

class Teacher extends Person implements Employee {
    private _registration: string
    private _admissionDate: Date
    constructor(name: string, birth_date:Date, private _salary:number, private _subject: Subject){
        super(name, birth_date);
        this._registration = this.generateRegistration()
        this._admissionDate = new Date();
    }
    generateRegistration(): string {
        return '1234567890123456'
    }
    public get salary() : number {
        return this._salary
    }
    public set salary(v : number) {
        this._salary = v;
    }
    public get subject() : Subject {
        return this._subject
    }
    public set subject(v: Subject) {
        this._subject = v;
    }
    public get admissionDate(): Date {
        return this._admissionDate
    }
    public set admissionDate(v : Date) {
        this._admissionDate = v;
    }
    public get registration() : string {
        return this._registration
    }
    
    
    
    

}