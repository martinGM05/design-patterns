class DrinkTS {

    private name: string;

    constructor(name: string){
        this.name = name;
    }

    info(): string {
        return this.name;
    }

}

const agua = new DrinkTS("Agua");
console.log(agua.info())

interface Product {
    price: number;
    getPrice(): string;
}

class BeerTS extends DrinkTS implements Product {

    private alcohol: number;
    price: number;

    constructor(name: string, alcohol: number, price: number){
        super(name);
        this.alcohol = alcohol;
        this.price = price
    }

    getPrice(): string {
        return "$ " + this.price
    }

    info(): string {
        return super.info() + ' ' + this.alcohol
    }

}

class Snack implements Product {

    name: string
    price: number;

    constructor(name: string, price: number){
        this.name = name;
        this.price = price;
    }

    getPrice(): string {
        return "El precio es: $ " + this.price
    }

}

const beerTS = new BeerTS("erdinger", 8.5, 1)
console.log(beerTS.info())

const productos: Product[] = [
    new BeerTS("corona", 4.5, 1),
    new Snack("papas", 0.5),
    new BeerTS("heineken", 5, 1.2)
];

function getPrice(items: Product[]){
    return items.reduce((acc, producto) => acc + producto.price, 0)
}

console.log(getPrice(productos))