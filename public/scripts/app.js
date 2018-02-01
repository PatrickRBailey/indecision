'use strict';

var _person = require('./person');

var _person2 = _interopRequireDefault(_person);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log((0, _person.isAdult)(18)); // import subtract, { square , add } from './utils';

// console.log('app.js is running');
// console.log(square(4));
// console.log(add(3,9));
// console.log(subtract(7,2));

console.log((0, _person.isAdult)(4));

console.log((0, _person.canDrink)(18));
console.log((0, _person.canDrink)(21));

console.log((0, _person2.default)(65));
console.log((0, _person2.default)(64));
