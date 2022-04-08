class Super {
    isSuper: boolean;
    constructor(isSuper: boolean) {
        this.isSuper = isSuper
    }
    protected sayHello() {
        console.log('Hello World')
    }
}

class SubClass extends Super {
    constructor(isSuper: boolean) {
        super(false)
    }
    sayHello2() {
        this.sayHello();
    }
}

const main = (object: Super) => {
    if(object.isSuper) console.log('Super !')
    else console.log('sub')
}

const superObject = new Super(true);
const subClassObject = new SubClass(false);

main(superObject);
main(subClassObject);

interface myInterface {
    myNumber: number,
    myFunc(myParam: number): string

}

class MyClass implements myInterface {
    myNumber: number;
    constructor(myNumber: number) {
        this.myNumber = myNumber;
    }
    myFunc(myParam: number): string {
       const sum = myParam + this.myNumber
       return sum.toString()
   }
}

const myObject = new MyClass(2);

interface Logger {
    log(param: string): void;
}

class ConsoleLogger implements Logger {
    log(param: string): void {
        console.log(param)
    }
}

class ConsoleLogger2 implements Logger {
    log(param: string): void {
        console.log(`${param} 2`)
    }
}

interface Database {
    logger: Logger;
    save(key: string, value: string):void;   
}

class ExampleDatabse implements Database {
    constructor(public logger: Logger = new ConsoleLogger()){}
    save(key: string, value: string): void {
        this.logger.log(`Key: ${key}, value:${value}`)
    }
}

const loggerObj = new ConsoleLogger();
const loggerObj2 = new ConsoleLogger2();
const database1 = new ExampleDatabse(loggerObj);
const database2 = new ExampleDatabse(loggerObj2);
const database3 = new ExampleDatabse();

database1.save('Chave1','Valor1');
database2.save('Chave2', 'Valor2');
database3.save('Chave3', 'Valor3');