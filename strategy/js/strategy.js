class SaleContext {

    constructor(strategy){
        this.strategy = strategy;
    }

    setStrategy(strategy){
        this.strategy = strategy;
    }

    calculate(amount){
        return this.strategy.calculate(amount)
    }
}

class RegularSaleStrategy {

    constructor(tax){
        this.tax = tax;
    }

    calculate(amount){
        return amount + (amount * this.tax);
    }

}

class DiscountStrategy {

    constructor(tax, discount){
        this.tax = tax;
        this.discount = discount;
    }

    calculate(amount){
        return amount + (amount * this.tax) - this.discount
    }

}

class ForeignSaleStrategy {

    calculate(amount){
        return amount * this.getDollarPrice();
    }

    getDollarPrice(){
        return 20;
    }

}

const regularSale = new RegularSaleStrategy(0.16)
const discountSale = new DiscountStrategy(0.16, 3)
const foreignSale = new ForeignSaleStrategy()

const sale = new SaleContext(regularSale);

// console.log(sale.calculate(10))
sale.setStrategy(discountSale)
// console.log(sale.calculate(10))
sale.setStrategy(foreignSale)
// console.log(sale.calculate(10))

// Explicación practica

const data = [
    {
        name: "Erdinger Pikantus",
        country: "Alemania",
        info: "Erding Pikantus es una cerveza de estilo weizenbock",
        img: "https://hogsback.co.uk/cdn/shop/products/thumbnail_IMG_8856.jpg?v=1655725029",
    },
    {
        name: "Corona",
        country: "México",
        info: "La cerveza corona es una marca mundialmente conocida",
        img: "https://images.unsplash.com/photo-1600213903598-25be92abde40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    },
    {
        name: "Delirium Tremens",
        country: "Bélgica",
        info: "Esta pale ale tiene una eferevescencia fina con un toque de picor",
        img: "https://belgianbeerbank.com/164-xlarge_default/delirium-tremens-33cl.jpg",
    }
]


class InfoContext {

    constructor(strategy, data, element){
        this.setStrategy(strategy);
        this.data = data;
        this.element = element;
    }

    setStrategy(strategy){
        this.strategy = strategy;
    }

    show(){
        this.strategy.show(this.data, this.element)
    }

}

class ListStrategy {

    show(data, element){
        element.innerHTML = data.reduce((ac, beer) => {
            return ac + `<div>
                <h2>${beer.name}</h2>
                <p>${beer.country}</p>
            </div>
            <hr>`;
        }, "")
    }

}

class DetailedListStrategy {

    show(data, element){
        element.innerHTML = data.reduce((ac, beer) => {
            return ac + `<div>
                <h2>${beer.name}</h2>
                <p>${beer.country}</p>
                <p>${beer.info}</p>
            </div>
            <hr>`;
        }, "")
    }

}

class ListWithImageStrategy {
    show(data, element){
        element.innerHTML = data.reduce((ac, beer) => {
            return ac + `<div>
                <h2>${beer.name}</h2>
                <img width="10%" src="${beer.img}">
            </div>
            <hr>`;
        }, "")
    }
}

const strategies = [
    new ListStrategy(),
    new DetailedListStrategy(),
    new ListWithImageStrategy()
]

const info = new InfoContext(new ListStrategy(), data, content)
info.show()

slcOptions.addEventListener("change", (event) => {
    const op = event.target.value;
    info.setStrategy(strategies[op])
    info.show()
});