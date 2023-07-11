class Singleton {

    static getInstance(){
        return Singleton.instance;
    }

    constructor(){
        this.random = Math.random();
        
        if(Singleton.instance){
            return Singleton.instance;
        }
        
        Singleton.instance = this;
    }

}

// const singleto = new Singleton();
// const singleto2 = new Singleton();
// const singleto3 = Singleton.getInstance();

// console.log(singleto.random)
// console.log(singleto2.random)
// console.log(singleto3.random)
// console.log(singleto === singleto2)
// console.log(singleto3 === singleto2)

class WeekDays {

    daysEs = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"]
    daysEn = ["Monday", "Tuesday", "Wednesdat", "Thursday", "Friday", "Saturday", "Sunday"]

    constructor(lang){
        this.lang = lang;

        if(WeekDays.instance){
            return WeekDays.instance;
        }

        Singleton.instance = this;

    }

    getDays(){
        return this.lang === "es" ?
            this.daysEs :
            this.daysEn;
    }

}

const weekDays = new WeekDays("en");
const weekDays2 = new WeekDays("es");
console.log(weekDays.getDays());
console.log(weekDays.getDays());