'use strict';

var square = function square(x) {
    return x * x;
};

// const squareArrow = (x) => {
//     return x * x;
// };

var squareArrow = function squareArrow(x) {
    return x * x;
};

console.log(squareArrow(4));

// const getFirstName = function(FullName) {
//     return FullName.split(' ')[0];
// };

// const getFirstName = (name) => {
//     return name.split(' ')[0];
// }

var getFirstName = function getFirstName(name) {
    return name.split(' ')[0];
};

console.log(getFirstName('Laura Bailey'));
