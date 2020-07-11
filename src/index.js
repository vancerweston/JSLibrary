// import { myMath } from './myMath';

// let x = 2;
// let y = 3;

// let addFunc = myMath.add(x,y);

// console.log('add:', addFunc);

// let subFunc = myMath.subtract(y,x);

// console.log('sub:', subFunc);


import { dice } from './dice';

let result = dice.rollDie(10);

console.log(result);

let diceTotal = dice.rollDice(3, 8);

console.log(diceTotal);

let myStats = dice.rollStats();

console.log(myStats);