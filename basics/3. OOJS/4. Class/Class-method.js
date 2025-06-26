class Person {
    constructor(name, age){
       this.name = name
       this.age = age     
       // sebenarnya menambhakan sebuah method sama dengan cara menambhakan di CF, hanya saja jika  di cf, method nya akan nempel di object instance(gilang)
    //    this.sayHallo = function(name) {
    //        console.log(`Hello ${name}, my name is ${this.name}`); // nah ini yang dimal=ksud sama dengan CF, dan ini akan nempel di object instance yang mana ini seharusa berada didalam prototype object. dan itu merupakan best practice nya.
    //    // silahkan jalankan di browser. dan lihat lah di gilang
    //    }       
    }

    sayhallo(name){
         console.log(`Hello ${name}, my name is ${this.name}`);
    }

}


const gilang = new Person("Gilang", 19)
console.log(gilang);
console.log(gilang.name);
gilang.sayhallo("Syifa")