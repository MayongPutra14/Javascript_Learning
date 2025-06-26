// CAea mewarisi sebuah prototype di sebuah parent


function Murid(name){
    this.name = name   
}
// pada bagian ini kita membuat sebuah CF dengan property yang sama, hanya untuk untuk mengetahui bagaimana cara kerjanya
function Guru(name){
    this.name = name   
}

// Murid.prototype = Guru.prototype // pada bagian ini kita telah mndefinisikan bahwa prototype yang ada di murid akan sama dengan yang ada di Guru
// baris kode ini adalah salah

// yang benar adalah seperti ini
Guru.prototype = Object.create(Murid.prototype) // nah ini yang benar, kita membuat sebuah object dengan prototype dari Murid.
Guru.prototype.costructor = Guru // ini digunakan suapaya, Guru memiliki CF guru bukan murid, kita bisa melihatnya du browser



Murid.prototype.sayHallo = function(nama){ // membuat sebuah prototype sapa dari murid
    console.log(`Hallo ${nama}, nama saya adalah ${this.name} saya adalah Murid!`);
}


Guru.prototype.sayHallo = function(nama){ // membuat sebuah prototype sapa dari Guru
    console.log(`Hallo ${nama}, nama saya adalah ${this.name} saya dalah Guru!`);
}

Guru.prototype.Umur = function(age) {
    console.log(`Saya ${this.name} berumur ${age}`);
}




const murid = new Murid("Gilang") 
murid.sayHallo("Felicia")


const guru = new Guru("Syifa") 
guru.sayHallo("Mutia")
guru.Umur(78)
// ketika kit sudah menjalankan kode di atas, maka yang akan menang adalah guru, keran guru merupakan bais kode yang paling akhir
// dan akan  menimpa muridnya. Silahkan dibalik untuk melihat perbedaannya.



// melihat deatil object di web
console.log(murid);
console.log(guru);