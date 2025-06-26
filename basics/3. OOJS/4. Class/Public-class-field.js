// Jadi public clas filed merupakan cara kita mengakses sebuah property didalam sebuah object
// property tersebut dapat di akses dari mana saja
// - dari dalam classnya
// - dari dalam method nya
// - dari luar object instance tersebut


class Person{
    firtName;
    lastName;   // nah ketiga ini merupakan public class
    umur = 19;

    constructor(firtname, lastName){
        this.firtName = firtname   
        this.lastName = lastName   // nah property diluar sana, bisa diakses dari dalam constructor
    }

    sayHallo(){
        console.log(`Umur di dalam saya halo ${this.umur}`);
    }
}



const gilang = new Person() 
// nah cara kita mengakses propery public uga bisa di luar dari object instance tersebut seperti
// gilang.firtName = "Gilang"
// gilang.lastName = "Mayong"
// gilang.umur = 25              nah ketiga cara ini merupakan cara kita mengakses public class
console.log(gilang);
gilang.sayHallo()