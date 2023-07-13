// Component
class ProductComponent {

    constructor(name){
        this.name = name;
    }

    getDetail(){
        return `${this.name}`
    }

}

// Decorator
class ProductDecorator {

    constructor(productComponet){
        this.productComponet = productComponet
    }

    getDetail(){
        return this.productComponet.getDetail();
    }

}

class CommercialInfoProductDecorator extends ProductDecorator {

    constructor(productComponet, tradename, brand) {
        super(productComponet)
        
        this.tradename = tradename;
        this.brand = brand;
    }

    getDetail(){
        return `${this.tradename} ${this.brand} ` + super.getDetail();
    }

}

class StoreProductDecorator extends ProductDecorator {
    constructor(productComponent, price){
        super(productComponent);
        this.price = price;
    }

    getDetail(){
        return super.getDetail() +  ` ${this.price} `
    }

}

class HTMLProductDecorator extends ProductDecorator {

    getDetail(){
        return `<h1>Información del producto</h1>
        <p>
            ${super.getDetail()}
        </p>`
    }

}

const productComponet = new ProductComponent("Cerveza");
console.log(productComponet.getDetail())

const commercialInfoProduct = new CommercialInfoProductDecorator(productComponet, "London Porter", "Fuller's")
console.log(commercialInfoProduct.getDetail())

const storeProduct = new StoreProductDecorator(productComponet, 15.5);
console.log(storeProduct.getDetail())

const product = new StoreProductDecorator(commercialInfoProduct, 15.5)
console.log(product.getDetail())

const htmlProductDecorator = new HTMLProductDecorator(product);
myDiv.innerHTML = htmlProductDecorator.getDetail()