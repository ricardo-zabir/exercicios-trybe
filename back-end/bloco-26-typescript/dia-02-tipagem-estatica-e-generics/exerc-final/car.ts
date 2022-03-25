enum color {
    preta = 'preta',
    branca = 'branca',
    vermelha = 'vermelha',
    prata = 'prata'
}

enum door {
    frontRight = 'front right door',
    frontLeft = 'front left door',
    backRight = 'back right door',
    backLeft = 'back left door'
}

enum directions {
    left = "left",
    right = "right"
}

class Car {
    brand:string;
    color:color;
    doors:number;

    constructor(brand:string, color:color, doors:number) {
        this.brand = brand;
        this.color = color;
        this.doors = doors;
    }

    honk():void { console.log('beep beep')}
    openTheDoor(door: door):void { console.log(`${door} opened`)}
    closeTheDoor(door: door):void { console.log(`${door} closed`)}
    turnOn():void { console.log('Car is running')}
    turnOff():void { console.log('Car shut down')}
    speedUp():void { console.log('Speed increasing !')}
    speedDown():void { console.log('Slowing down')}
    stop():void { console.log('The car stopped')}
    turn(direction: directions):void { console.log(`Turned to the ${direction}`)}
    
}

const palioCar = new Car('Palio', color.prata, 4);

function trip(car: Car):void {
    car.turnOn();
    car.speedUp();
    car.turn(directions.left);
    car.speedDown();
    car.turn(directions.right);
    car.speedUp();
    car.turn(directions.right);
    car.speedDown();
    car.stop();
    car.openTheDoor(door.backLeft);
    car.closeTheDoor(door.backLeft);
    car.speedUp();
    car.turn(directions.right);
    car.speedUp();
    car.turn(directions.left);
    car.turn(directions.right);
    car.openTheDoor(door.backLeft);
    car.closeTheDoor(door.backLeft);
}

trip(palioCar);
