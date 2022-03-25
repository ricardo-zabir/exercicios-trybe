"use strict";
var color;
(function (color) {
    color["preta"] = "preta";
    color["branca"] = "branca";
    color["vermelha"] = "vermelha";
    color["prata"] = "prata";
})(color || (color = {}));
var door;
(function (door) {
    door["frontRight"] = "front right door";
    door["frontLeft"] = "front left door";
    door["backRight"] = "back right door";
    door["backLeft"] = "back left door";
})(door || (door = {}));
var directions;
(function (directions) {
    directions["left"] = "left";
    directions["right"] = "right";
})(directions || (directions = {}));
class Car {
    constructor(brand, color, doors) {
        this.brand = brand;
        this.color = color;
        this.doors = doors;
    }
    honk() { console.log('beep beep'); }
    openTheDoor(door) { console.log(`${door} opened`); }
    closeTheDoor(door) { console.log(`${door} closed`); }
    turnOn() { console.log('Car is running'); }
    turnOff() { console.log('Car shut down'); }
    speedUp() { console.log('Speed increasing !'); }
    speedDown() { console.log('Slowing down'); }
    stop() { console.log('The car stopped'); }
    turn(direction) { console.log(`Turned to the ${direction}`); }
}
const palioCar = new Car('Palio', color.prata, 4);
function trip(car) {
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
