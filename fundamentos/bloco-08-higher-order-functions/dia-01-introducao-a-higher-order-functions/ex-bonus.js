const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const damageDragon = strength => {
  return Math.floor(Math.random() * (strength - 15)) + 15;
}

const damageWarrior = (strength,weaponDmg) => {
  return Math.floor(Math.random() * ((strength * weaponDmg) - strength)) + strength;
}

const wizardMove = (intelligence,mana) => {
  if(mana < 15) {
    return {
      damage: Math.floor(Math.random() * ((intelligence * 2) - intelligence)) + intelligence,
      manna: mana
    }
  }
  else 
  return {
    damage: Math.floor(Math.random() * ((intelligence * 2) - intelligence)) + intelligence,
    mana: mana - 15
  }
}



const gameActions = {
  warriorAtackDragon: (damageWarrior) => {
    let damageValue = damageWarrior(warrior.strength,warrior.weaponDmg);
    dragon.healthPoints -= damageValue;
    warrior.damage = damageValue;
  },
  mageTurn: (wizardMove) => {
    let objectOfMage = wizardMove(mage.intelligence,mage.mana);
    dragon.healthPoints -= objectOfMage.damage;
    mage.mana = objectOfMage.mana;
    mage.damage = objectOfMage.damage;
  },
  dragonTurn: (damageDragon) => {
    let monsterDamage = damageDragon(dragon.strength);
    warrior.healthPoints -= monsterDamage;
    mage.healthPoints -= monsterDamage;
    dragon.damage = monsterDamage;
  },
  showUpdated: () => {
    battleMembers.dragon = dragon;
    battleMembers.mage = mage;
    battleMembers.warrior = warrior;
    return battleMembers;
  }
};

const oneTurn = () => {
gameActions.warriorAtackDragon(damageWarrior)
gameActions.mageTurn(wizardMove);
gameActions.dragonTurn(damageDragon);
console.log(gameActions.showUpdated());
}

oneTurn();
oneTurn();
oneTurn();
