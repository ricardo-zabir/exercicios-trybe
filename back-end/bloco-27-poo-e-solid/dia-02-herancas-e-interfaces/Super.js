"use strict";
class Super {
    constructor(isSuper) {
        this.isSuper = isSuper;
    }
    sayHello() {
        console.log('Hello World');
    }
}
class SubClass extends Super {
    constructor(isSuper) {
        super(false);
    }
    sayHello2() {
        this.sayHello();
    }
}
const main = (object) => {
    if (object.isSuper)
        console.log('Super !');
    else
        console.log('sub');
};
const superObject = new Super(true);
const subClassObject = new SubClass(false);
main(superObject);
main(subClassObject);
class MyClass {
    constructor(myNumber) {
        this.myNumber = myNumber;
    }
    myFunc(myParam) {
        const sum = myParam + this.myNumber;
        return sum.toString();
    }
}
const myObject = new MyClass(2);
class ConsoleLogger {
    log(param) {
        console.log(param);
    }
}
class ConsoleLogger2 {
    log(param) {
        console.log(`${param} 2`);
    }
}
class ExampleDatabse {
    constructor(logger = new ConsoleLogger()) {
        this.logger = logger;
    }
    save(key, value) {
        this.logger.log(`Key: ${key}, value:${value}`);
    }
}
const loggerObj = new ConsoleLogger();
const loggerObj2 = new ConsoleLogger2();
const database1 = new ExampleDatabse(loggerObj);
const database2 = new ExampleDatabse(loggerObj2);
const database3 = new ExampleDatabse();
database1.save('Chave1', 'Valor1');
database2.save('Chave2', 'Valor2');
database3.save('Chave3', 'Valor3');
