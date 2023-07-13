interface ListImplementor {
    elements: number[];
    add(number: number): void;
    getElements(): number[];
}

class OrderedList implements ListImplementor {

    elements: number[] = [];

    add(number: number): void {
        this.elements.push(number);
        this.elements.sort();
    }

    getElements(): number[] {
        return this.elements;
    }

}

class UniqueList implements ListImplementor {

    elements: number[] = [];

    add(number: number): void {
        if(!this.elements.includes(number)){
            this.elements.push(number);
        }
    }

    getElements(): number[] {
        return this.elements;
    }

}

interface DataAbstraction {
    implementor: ListImplementor;
    add(number: number): void;
    get(): number[];
    operation(fn: (n: number) => number): number[];
}

class DataRefinedAbstraction implements DataAbstraction {

    implementor: ListImplementor;

    constructor(implementor: ListImplementor){
        this.implementor = implementor;
    }

    add(number: number): void {
        this.implementor.add(number);
    }

    get(): number[] {
        return this.implementor.elements;
    }

    operation(fn: (n: number) => number): number[] {
        return this.implementor.getElements().map(fn);
    }
}

const uniqueData = new DataRefinedAbstraction(new UniqueList());
const orderedData = new DataRefinedAbstraction(new OrderedList());
uniqueData.add(3);
uniqueData.add(3);
uniqueData.add(1);
uniqueData.add(1);
uniqueData.add(2);
console.log(uniqueData.get());


orderedData.add(3)
orderedData.add(3)
orderedData.add(1)
orderedData.add(1)
orderedData.add(2)
console.log(orderedData.get())

const uniqueItems = uniqueData.operation(((number: number) => number * 2))
const orderedItems = orderedData.operation(((number: number) => number * 2))
console.log(uniqueItems)
console.log(orderedItems)