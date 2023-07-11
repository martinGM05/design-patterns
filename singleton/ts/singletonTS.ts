class SingletonTS {

    private static instance: SingletonTS;
    public random: number;
    
    private constructor(){
        this.random = Math.random();
    }

    public static getIntance(): SingletonTS {
        if(!this.instance){
            this.instance = new SingletonTS();
        }

        return this.instance;
    }
}


const singleton = SingletonTS.getIntance();
const singleton2 = SingletonTS.getIntance();
console.log(singleton)
console.log(singleton2)
singleton.random = 7;
console.log(singleton)
console.log(singleton2)