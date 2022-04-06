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
console.log(myObject.myFunc(6));
