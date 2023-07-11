
function sum(a, b){
    return a + b;
}

let res = sum(1, 2);
console.log(res)

const fsum = sum;
res = fsum(0, 1)
console.log(res)

function operation(fn, a, b){
    console.log('Se hace algo')
    console.log(fn(a, b));
}

operation(sum, 10 , 20)

// arrow function
operation((a, b) => a * b, 5 , 5)

operation((a, b) => {
    const c = a + b;
    return c * 2;
}, 1, 2)

// foreach
const names = ["Hector", "Juan", "Pablo", "Anna"];
names.forEach(((name, index)  => console.log((index + 1) + '.- ' + name)));
names.forEach((name) => console.log(name.toUpperCase()));
console.log(names)
names.sort();
console.log(names)

// map
const namesUpper = names.map((name) => name.toUpperCase())
console.log(namesUpper)

// reduce
const numbers = [5, 4, 7, 1, 10]
const total = numbers.reduce((ac, number) => ac + number, 0);
console.log(total)

class Drink {

    constructor(name){
        this.name = name
    }

    toString(){
        return 'La bebida es: ' + this.name
    }

}

function DrinkA(name){
    this.name = name;
    this.info = function(){
        return "la bebida es: " + this.name
    }
}

const drinkA = new DrinkA('Agua');
console.log(drinkA.info())

const drink = new Drink('Tequila');
console.log(drink.toString())

class Beer extends Drink{

    constructor(name, alcohol){
        super(name, alcohol)
        this.alcohol = alcohol;
    }

    info(){
        return super.info() + " " + this.alcohol
    }

}

const beer = new Beer('erdinger', 8.5)
console.log(beer.toString())