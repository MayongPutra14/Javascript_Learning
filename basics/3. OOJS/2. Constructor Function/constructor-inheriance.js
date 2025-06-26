// Constructor Inhertance
/*
Ini namanya Constructor Inheritance (Pewarisan Constructor). Maksudnya, kita bisa membuat satu "cetakan" (seperti Manager) yang bisa "mewarisi" sifat-sifat dan kemampuan dari "cetakan" lain (seperti Employee) tanpa perlu menulis ulang semua kodenya. Ini membuat kode kita lebih rapi dan mudah diatur!



function Murid(firstname, study){
    this.firstname = firstname
    this.study = study
    this.introduction = function(name){
        console.log(`Hello ${name}, my name is ${this.firstname}`);
    }
}

function Guru(firstname,lastname, age, hobi, pedidikan){
    this.lastname = lastname
    this.age = age 
    this.hobi = hobi
    Murid.call(this, firstname, pedidikan)// gunakan .call(this, parameter yang dibutuhkan), jika tidak maka apa yang ada dimurid tidaka akan pernah jalan.
     // pada parameter .call, kita bisa memberikan nama parameter yang tersedia di Guru.
    // namun perlu diperhatikan urutannya agar data nya tidak berantakan.
}

const gilang = new Guru("Gilang", "Mayong", 19, "Membaca", "ITB")
gilang.introduction("Syifa")
console.log(gilang);

*/

// // latihan 1:  Penangkaran Hewan
// function Hewan(nama, jenis) {
//     this.nama = nama
//     this.jenis = jenis
//     this.suara = function(nama){
//        console.log(`Hallo ${nama}, saya ${this.nama} saya adalah ${this.jenis}`); // pastika jika ingin keluar menggunakan sosole.log
//     }
// }

// // Kucing 
// function Kucing(nama, warna,jenis ) {
//      this.warna = warna
//      Hewan.call(this, nama, jenis)
// }

// // Anjing
// function Anjing(nama, ras,jenis ) {
//      this.ras = ras
//      Hewan.call(this, nama, jenis)
// }

// const siKucing = new Kucing("Hachi", "Orange", "Percia")
// const siAnjing = new Anjing("Pepa", "Macan", "Pitbull")

// siKucing.suara("Pepa")
// siAnjing.suara("Hachi")


// const Kucing = new Hewan("Miko", "Kucing")
// Kucing.suara("Hendry")

// latihan 2: Toko Roti
function Product(name, price) {
    this.name = name
    this.price = price

    this.info = function(){
        console.log(`Product ${this.name} Price: ${this.price}`);
    }
}

// untuk roti manis
function RotiManis(name, price, toping){
    this.toping = toping
    Product.call(this, name, price)

    this.rotiInfo = function(){
        console.log(`Roti Manis: ${this.name} Toping: ${toping} Price: Rp.${price}`);
    }
}

// untuk kue kering
function KueKering(name, price, jmlhToples) {
    this.jumlahTopels = jmlhToples
    Product.call(this, name, price)

    this.kueInfo = function() {
        console.log(`Kue Kering: ${name} jumlah: ${this.jumlahTopels} Price: Rp.${price}`);
    }
}


const rotiCoklat = new RotiManis("Roti Coklat", 10000, "Slay")
const kueNastar = new KueKering("Nastar", 20000, 5)

rotiCoklat.info()
rotiCoklat.rotiInfo()

kueNastar.info()
kueNastar.kueInfo()

console.log(rotiCoklat);
console.log(kueNastar);


