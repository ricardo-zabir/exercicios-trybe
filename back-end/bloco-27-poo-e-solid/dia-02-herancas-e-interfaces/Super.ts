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
console.log(myObject.myFunc(6));