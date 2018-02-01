// import subtract, { square , add } from './utils';

// console.log('app.js is running');
// console.log(square(4));
// console.log(add(3,9));
// console.log(subtract(7,2));

import isSenior, { isAdult, canDrink } from './person';

console.log(isAdult(18));
console.log(isAdult(4));

console.log(canDrink(18));
console.log(canDrink(21));

console.log(isSenior(65));
console.log(isSenior(64));