'use strict';

var add = function add(a, b) {
    return a + b;
};

console.log(add(5, 4));

var user = {
    name: 'Patrick',
    cities: ['Olympia', 'Harrisburg', 'Niceville'],
    printPlacesLived: function printPlacesLived() {
        var cityMessages = this.cities.map(function (city) {
            return city;
        });

        return cityMessages;
    }
};

console.log(user.printPlacesLived());

var multiplier = {
    numbers: [1, 2, 3],
    multiplyBy: 2,
    multiply: function multiply() {
        var _this = this;

        return this.numbers.map(function (number) {
            return number * _this.multiplyBy;
        });
    }
};

console.log(multiplier.multiply());
