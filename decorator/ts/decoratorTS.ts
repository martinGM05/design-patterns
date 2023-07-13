interface Component {
    getDetail() : string;

}

class ProductComponent implements Component {

    protected name: string;

    constructor(name: string){
        this.name = name;
    }

    public getDetail(): string {
        return `${this.name}`
    }

}

abstract class ProductDecorator implements Component {
    protected component : Component;

    constructor(component: Component){
        this.component = component;
    }

    public getDetail(): string {
        return this.component.getDetail();
    }
}

// decorator 1
class CommercialInfoProductDecorator extends ProductDecorator {

    private tradeName: string;
    private brand: string;

    constructor(component: Component, tradeName: string, brand: string){
        super(component);
        this.tradeName = tradeName;
        this.brand = brand;
    }

    public getDetail(): string {
        return `${this.tradeName} ${this.brand} ` + super.getDetail()
    }

}

// decorator 2
class StoreProductDecorator extends ProductDecorator {

    private price: number;

    constructor(componente: Component, price: number){
        super(componente);
        this.price = price;
    }

    public getDetail(): string {
        return super.getDetail() + 
            ` ${this.price}`;
    }

}

// decorator 2
class HMTLProductDecorator extends ProductDecorator {

    public getDetail(): string {
        return `<h1>Información del producto</h1>
        <p>
            ${super.getDetail()}
        </p>`
    }

}


// Ejecución 

// Componente
const productComponent = new ProductComponent("Cerveza");
console.log(productComponent.getDetail())

// Decorator 1 con component
const commercialInfoProduct = new CommercialInfoProductDecorator(productComponent, "London porter", "Fuller's")
console.log(commercialInfoProduct.getDetail())

// Decorator 2 con component
const storeProduct = new StoreProductDecorator(productComponent, 15.55)
console.log(storeProduct.getDetail())

const storeProduct2 = new StoreProductDecorator(commercialInfoProduct, 20.2)
console.log(storeProduct2.getDetail())

const htmlProduct = new HMTLProductDecorator(storeProduct2);
console.log(htmlProduct.getDetail())
