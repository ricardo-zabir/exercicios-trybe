"use strict";
class Character {
    constructor() { }
}
class MeeleeCharacter extends Character {
    talk() {
        console.log('a');
    }
    specialMove() {
        console.log('b');
    }
}
class LongRangeCharacter extends Character {
    talk() {
        console.log('c');
    }
    specialMove() {
        console.log('d');
    }
}
const call = (char) => {
    char.talk();
    char.specialMove();
};
const mee = new MeeleeCharacter();
const lr = new LongRangeCharacter();
call(mee);
call(lr);
