// function Buku(judul, penulis, tahun) {
//     this.judul = judul
//     this.penulis = penulis
//     this.tahun = tahun

//     // this.info = function(){
//     //     console.info(`Buku berjudul ${this.judul} ditulis oleh ${this.penulis} pada tahun ${this.tahun}.`);
//     // }  
//     // method yang dibangun didalam CF akan memakan memory, dan best pratice nya, kita harus membuat diluar Cf, dan memasukannya kedalam prototype Object
// }

// Buku.prototype.info = function(){
//         console.info(`Buku berjudul ${this.judul} ditulis oleh ${this.penulis} pada tahun ${this.tahun}.`);
// } // ini best practice

// const buku1 = new Buku("Umar bin Khattab", "Muhammad Husein Haikal", 2008)
// buku1.info()
// const buku2 = new Buku("Pemuda Hijaz", "Budi Ashari", 2011)
// buku2.info()

// const buku3 = new Buku("Tazkiratus sami'", "Syekh Sulaiman", 2015)
// buku3.info()

// console.log(buku1);
// console.log(buku2);
// console.log(buku3);


class Hewan{
    constructor(nama, jenis, umur){
        this.nama = nama
        this.jenis = jenis
        this.umur = umur
    }

    deskripsi(){
        console.info(`Hello, my name is ${this.nama}, i'm  ${this.jenis}, and I'm ${this.umur} Years old`);
    }
}



class Kucing extends Hewan{
    constructor(nama, umur) {
        super(nama,"Kucing", umur) // property yang tetap, boleh langsung di isi
    }

    suara(){
        console.info("Meong meong!");
    }

}

class Anjing extends Hewan{
    constructor(nama, umur) {
        super(nama, "Anjing", umur)
    }

    suara(){
        console.info("Gug gug!!");
    }

}


const kitty = new Kucing("Honey", "Percia", 3)
const puppy = new Anjing("Alex", "Helder", 2)


kitty.deskripsi()
kitty.suara()

puppy.deskripsi()
puppy.suara()



// class Product{
//     constructor(name, price, stock){
//         this.name = name
//         this.price = price
//         this.stock = stock
//     }

//     infoProduct(){
//         console.log(`Name: ${this.name}`);
//         console.log(`Price: ${this.price}`);
//         console.log(`Stock: ${this.stock}`);
//     }

//     beli(jumlah){
//         console.log(`Anda Membeli`);
//         console.log(`Name: ${this.name}`);
//         console.log(`Jumlah: ${jumlah}`);
//         console.log(`Price: ${this.price}`);
//         console.log(`Total harga adalah: ${jumlah * this.price}`);
//     }
// }



// class Pakaian extends Product{
//     constructor(name, price, stock, size){
//         super(name, price, stock)
//         this.size = size
//     }
// }

// class Elektronik extends Product{
//     constructor(name, price, stock, garansi){
//         super(name, price, stock)
//         this.garansi = garansi
//     }
// }


// const kemeja = new Pakaian("Cardinal", 200000, "Available")
// kemeja.beli(2)
// const Kipas = new Elektronik("Kipas", 40000, "Not Available")
// Kipas.infoProduct()