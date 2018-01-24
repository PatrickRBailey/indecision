const add = (a,b) => a + b

console.log(add(5,4));

const user = {
    name: 'Patrick',
    cities: ['Olympia', 'Harrisburg', 'Niceville'],
    printPlacesLived() {
       const cityMessages = this.cities.map((city) => {
            return city;
        });

        return cityMessages;
    }
};

console.log(user.printPlacesLived());

const multiplier = {
    numbers: [1,2,3],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};

console.log(multiplier.multiply());