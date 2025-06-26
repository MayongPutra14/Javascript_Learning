// Ini adalah class inheritance, dimana semua method parent(Murid) diturunkan ke childnya yaitu Guru, dengan menggunakan kata kunci extend
// karena sebelumnya kita mengunakan nama_constructor.call(this, parameters)



class Murid{
    sayHallo(name, who){
        console.log(`Hallo ${name}, my name is ${this.name} i'm a ${this.profesi}`);
        console.log(`Hallo ${name}, my name is ${this.name} i'm a ${who}`);
    }
}

class Guru extends Murid{
    // sayHallo(name){
    //     console.log(`Hallo ${name}, my name is ${this.name} i'm a teacher`);
    // }
}

const siswa = new Murid()
siswa.name = "Gilang"
siswa.profesi = "Student"
siswa.sayHallo("Syifa", "Student")

const guru  = new Guru()
guru.name = "Hikmaya"
guru.profesi = "Teacher"

guru.sayHallo("Handayani", "Teacher")