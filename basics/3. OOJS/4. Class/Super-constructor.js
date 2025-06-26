// class "super" ini sangat berguna ketika ingin membaut sebuah contructor didalam class child(guru)
// dan harus ada "extend" nya barus bisa, jadi kalo kita tidak menggunakan "Extends" itu sama saja kita tidak melakukan inheritance.



class Murid{

    constructor (firstname, profesi){
        this.firstname = firstname
        this.profesi = profesi
    }


    sayHallo(name){
        console.log(`Hallo ${name}, my name is ${this.firstname} i'm a ${this.profesi}`);
    }
}

class Guru extends Murid{
    constructor(firstname, lastname, profesi){
        super(firstname, profesi) // jika kita tidak menggunakan "super" maka method dari sayHallo tidak akan berjalan di guru.
        this.lastname = lastname // ini cara mewarisi property didalam sebuah class
    }   

    //  sayHallo(name){
    //     console.log(`Hallo ${name}, my name is ${this.firstname} i'm a ${this.profesi}`);
    // }
}

const siswa = new Murid("Gilang", "student")
siswa.sayHallo("Syifa")

const guru  = new Guru("Hikmaya","Nur", "Teacher")

guru.sayHallo("Handayani")

console.log(siswa);
console.log(guru);