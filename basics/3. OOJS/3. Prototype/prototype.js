// Prototype
/*
 Prototype itu merupakan bagian dari sebuah object, jadi ketika saya membuat sebuah CF maka otomatis javascript membuatkan prototype nya.
 nah setelah itu didalam prototype dari CF kita, disana akan ada Prototype asli dari javascript yaitu "objec.prtoype".
 disana lah sebuah method aslinya di simpan.

 ** perlu teman teman ketahui: bahwa sebuah fungsi yang ada di dalam object disebut dengan method, dan kita bisa membuat method sendiri.
 berdasarkan keinginan kita. untuk menambahkan nya kita hanya perlu meggunakan 'Contructor.prototype.method'
Construktor = nama contructor function kita
prototype = Sintaks yang harus digunakan ketika ingin menambahkan method baru.
method = fungsi apa yang ingin kita tambhakan, misalna saja sapa, introduction


** Hal peting lainya: ketikan teman teman membuat prototype di dalam CF, maka otomatis akan diwariskan kedalam object yang kita buat.
nah object yang kita buat seperti Honda dan Toyota itu adalah "object instance", meskipun itu adalah object unik saja.
anggap saja seperti sebuah perusahaan besar(Constructor function), maka jika kita membuat cabang (object), otomaatis cabang tersebut
memiliki metode dan cara kerja yang mirip dengan Perusahaan besarnya(Constructor function), nah ketika kita membuka cabang baru (object)
kemudian kita ingin katakanlah melakukan inovasi di cabang tersebut yaitu  pengajian(method), maka pengajian tersebut hanya ada pada cabangnya.
diperusahaan besarnya tidak ada.   
 */


/*
function MobilIndonesia(type, tahun) { 
  this.type = type 
  this.tahun = tahun  
  this.introduction = function(nama) {
    console.info(`Memperkenalkan mobil ${nama}, dengan tipe ${this.type}, tahun rilis ${this.tahun}`)
  }
}
const Honda = new MobilIndonesia("G", 2025) 
const Toyota = new MobilIndonesia("A", "2019")

MobilIndonesia.prototype.turnOn = function(){
    console.log(`Enggine ON`);
}
                                                // nah kedua prototype ini akan muncul pada honda dan toyota, dan kepada object lainnya yang dibuat dengan CF MobilIndonesia.
                                                // jika ingin melihatnya, lihatlah dibagian honda dan toyota, maka disana sudah tersedia method yang kita buat.

MobilIndonesia.prototype.wash = function(){
    console.log(`Car is washing....`);
}



// Honda.engineOn = function(){
//     console.info(`${this.type} dihidupkan`); // nah ini hanya akan muncul pada honda saja, toyota tidak, apalagi di MobilIndonesia.
// }

console.info(Honda);
console.info(Toyota);
 */



/**
// cara mengakses prototype
// untuk bisa mengakses prototype, kita harus menggunakan "object.prototype() (ini dalaha method yang ingin digunakan)"

function MobilIndonesia(type, tahun) { 
  this.type = type 
  this.tahun = tahun  
  this.introduction = function(nama) {
    console.info(`Memperkenalkan mobil ${nama}, dengan tipe ${this.type}, tahun rilis ${this.tahun}`)
  }

  this.turnOn = function(){
    console.log(`${this.type}, sedang di nyalakan`);
  }
}
const Honda = new MobilIndonesia("G", 2025)
Honda.turnOn = function(){
    console.log("Mesin dinyalakan"); // ini akan dijalankan terlebih dahulu, jika tidak maka 
} 

const Toyota = new MobilIndonesia("A", "2019")

// menambahkan method kedalam prtotype
MobilIndonesia.prototype.turnOn = function(){
    console.log(`Enggine ON`); // yang ini akan dijalankan
}
MobilIndonesia.prototype.wash = function(){
    console.log(`Car is washing....`);
}



console.info(Honda);
console.info(Toyota);


Honda.turnOn() // nah ini cara mengakses sebuah method. dan perlu di ingat karena method b=merupakan sebuah function jadi kita haru smenggunakan ()
Toyota.turnOn()

// console.log(Honda.tahun); // ini merupakan property

//  * ada hal yang perlu kita ingin, yaitu bagaimana cara kerja sebuah pemanggilan method lihat dibagian object (cabang) diatas.
//  * 1. jika sebuah method berada didalam CF, maka yang akan diakses pertama adalah yang didalam CF
//  * 2. Jika sebuah method tidak ada didala CF, namu ada didalam object(cabang), maka CF akan dilewat, dan cabang akan di jalankan
//  * 3. Jika sebuah method tidak ada di CF, Dan di cabang, maka yang akan dijalankan adalah yang berada didalam ptorotype bawaan javascript
//  * 
//  * jika teman teman, membuat sebuah methode di Cf, kemudian membuatnya sama didalam cabang, maka yang akan dijalankan adalah yang dicabang. karena menurut saya
//  * itu adalah prioritas kepemilikan, karena jika dibuatnya dala cabang, maka cabang yang lain tidak akan bisa menggunakannya, dan di perusahan besar juga tidak akan bisa menggunakannya.
//  * 
//  * 
//  * 
//  * tapi sebaliknya  jika teman tema membuatnya didalam perusahaan besar maka method nya bisa dijalankan.

*/

