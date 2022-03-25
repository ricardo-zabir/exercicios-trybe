type bird = {
    name: string,
    age: number,
    breed: string,
    canFly: boolean
}

type sum = (x: number, y: number) => number

type address = {
    street: string,
    number: number,
    city: string,
    state: string
}

type state = ('solid' | 'gas' | 'liquid')

type cpf = (number | string)

type so = ('macOs' | 'windows' | 'linux')

type vowels = ('a' | 'e' | 'i' | 'o' | 'u');


class Dog {
    name: string;
    breed: string;
    age: number;

    constructor(name: string, breed: string, age: number) {
        this.name = name
        this.breed = breed
        this.age = age
    }

    bark():void { console.log('AU AU AU')}
}

const doggo = new Dog('alex', 'golden', 22);
doggo.bark()

class House {
    address:string;
    number:number;
    owner: string;

    constructor(address:string, number:number, owner:string) {
        this.address = address
        this.number = number
        this.owner = owner
    }

    enterHouse():void { console.log('You entered the house')}

    leaveHouse():void { console.log('You left the house')}
}

const superHouse = new House('Rua dos bobos', 0, 'Fulano');
superHouse.enterHouse();
superHouse.leaveHouse();

class Flight {
    flightNumber:number;
    departure: Date;
    arrival: Date;

    constructor(flightNumber: number, departure: Date, arrival: Date) {
        this.flightNumber = flightNumber
        this.departure = departure
        this.arrival = arrival
    }

    checkWhenItLeaves():void { console.log(`Leaves at ${this.departure}`)}
    checkWhenItArrives():void { console.log(`Arrives at ${this.arrival}`)}
}

const myFlight = new Flight(100, new Date('2022-04-01T04:45'), new Date('2022-04-01-T08:30'))
myFlight.checkWhenItLeaves();
myFlight.checkWhenItArrives();

interface Car {
    model: string;
    year: number;

}

interface Feline {
    breed: string;
    age: number;
}

interface Plane {
    model: string;
    year: number;
}