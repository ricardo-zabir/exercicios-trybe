abstract class Character {
    constructor() {}
    abstract talk(): void;
    abstract specialMove():void;
}

class MeeleeCharacter extends Character {
    talk(): void {
        console.log('a')
    }
    specialMove(): void {
        console.log('b')
    }

}

class LongRangeCharacter extends Character {
    talk(): void {
        console.log('c')
    }
    specialMove(): void {
        console.log('d')
    }
}

const call = (char: Character) => {
    char.talk();
    char.specialMove();
}

const mee = new MeeleeCharacter();
const lr = new LongRangeCharacter();

call(mee);
call(lr);

