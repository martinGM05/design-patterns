interface IObserver<T> {
    refresh(value: T ) : void
}

interface ISubject<T> {
    observers: IObserver<T>[];
    suscribe(observer: IObserver<T>) : void
    unsuscribe(observer: IObserver<T>) : void
    notify(value: T) : void
}

class Subject<T> implements ISubject<T> {
    observers: IObserver<T>[];

    constructor(){
        this.observers = [];
    }

    suscribe(observer: IObserver<T>): void {
        this.observers.push(observer);
    }

    unsuscribe(observer: IObserver<T>): void {
        this.observers = this.observers.filter(obs => obs !== observer)
    }

    notify(value: T): void {
        this.observers.forEach(e => {
            e.refresh(value)
        })
    }
}

class Observer<T> implements IObserver<T> {
    private fn: (value: T) => void;

    constructor(fn: (value: T) => void){
        this.fn = fn
    }

    refresh(value: T): void {
        this.fn(value);
    }
}

const subject = new Subject<number>();
const obs1 = new Observer<number>((n: number) => {
    console.log('Hello ', n)
})
const obs2 = new Observer<number>((n: number) => {
    console.log('Hi ', n)
})

subject.suscribe(obs1);
subject.suscribe(obs2);
subject.notify(1.2)
subject.notify(30)


const subjectString = new Subject<string>();
const obs1String = new Observer<string>((n: string) => console.log(n.toUpperCase()))
const obs2String = new Observer<string>((n: string) => console.log(n.toLocaleLowerCase()))

subjectString.suscribe(obs1String)
subjectString.suscribe(obs2String)
subjectString.notify("Martin")
subjectString.notify("Gonzalez")