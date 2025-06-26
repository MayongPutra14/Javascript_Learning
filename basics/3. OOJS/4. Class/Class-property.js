class Person {
    constructor(name, age){
       this.name = name
       this.age = age      // kita bisa menambhakan property didalam constructor
    }
}


const gilang = new Person("Gilang", 19)
// gilang.name = "gilang" // kita juga bisa menambhakan property diluar constructor
console.log(gilang);
console.log(gilang.name);