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

class Observer {

    constructor(fn){
        this.fn = fn;
    }

    refresh(data){
        this.fn(data)
    }

}

const s = new Subject();
const o1 = new Observer(d => console.log("Hola soy el observador 1 " + d))
const o2 = new Observer(d => {
    div1.innerHTML = d;
})
const o3 = new Observer(d => {
    div2.innerHTML = d.split("").reverse().join("");
})
s.suscribe(o1);
s.suscribe(o2);
s.suscribe(o3);

function change(){
    s.notify(myText.value);
}