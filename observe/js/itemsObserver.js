class Subject {

    constructor(){
        this.observers = [];
    }

    suscribe(observer){
        this.observers.push(observer)
    }

    unsuscribe(observe){
        this.observers = this.observers.filter(obs => obs !== observe)
    }

    notify(data){
        this.observers.forEach(e => {
            e.refresh(data);
        })
    }
}

class ItemsSubject extends Subject {

    constructor(){
        super();

        this.data = [];
    }

    add(item){
        this.data.push(item);
        this.notify(this.data);
    }

}

class HtmlElementObserver {

    constructor(element){
        this.element = element;
    }

    refresh(data){
        this.element.innerHTML = data.reduce((ac, e) => {
            return ac + `<p>
                ${e}
            </p>` 
        }, "")
    }
}

const items = new ItemsSubject();
const div1Observer = new HtmlElementObserver(div1);
const div2Observer = new HtmlElementObserver(div2);

class Observer {

    constructor(fn){
        this.fn = fn;
    }

    refresh(data){
        this.fn(data)
    }

}

const observer1 = new Observer((data) => {
    div3.innerHTML = data.length;
})

items.suscribe(div1Observer)
items.suscribe(div2Observer)
items.suscribe(observer1)

function add(){
    const name = txtName.value;
    items.add(name)
}