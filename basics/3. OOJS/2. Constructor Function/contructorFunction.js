
// Jika sebuah objecck dibuat dengan cara manual maka itu sama dengan object yang unik
// 
//  const gilang = {
  //  inilah yang disebut unik, karena setiap data yang ada tidak sama dnegan objecct yang lainnya
  // }
  // 
  
  
  
  
  
  
// membuat Contructor Function = Function biasa
// function MobilIndonesia() { // Mobil merupakan Class atau Constructor Function

// }

// Jika ingin membuat sebuah object baru kita harus menggunakan kata new
// const Honda = new MobilIndonesia() // inilah yang disebut object
// const Toyota = new MobilIndonesia()


/*
// Property didalam constructor funtion
// jika ingin membaut sebuah property didalam constructor function kita harus menggunakan kata kunci this.nama_property
//  dan jika kita sudah membuat nya, maka otomatis object yang kita buat juga ada isi dari constructor function nya


function MobilIndonesia() { // Mobil merupakan Class atau Constructor Function
  this.type = ""
  this.tahun = ""  // Jika sebuah property dikosongkan atau off, sebenarnya tidak mengapa, hanya saja untuk menjaga konsistensi.
}
const Honda = new MobilIndonesia()
Honda.type = "H-RV"  // sebuah property bisa saja ditambahkan langsung seperti ini.

const Toyota = new MobilIndonesia()
Toyota.tahun = "2023"

console.log(Honda);
console.log(Toyota);
*/



/* 
// Method di constructor function
// methode ini sebenarnya sama seperti method di object pada umumnya, hanya saja dengan membuatnya didalam contructor funtion, kita tidak perlu lagi
// membuatnya satu per satu. Dan jika kita membuatnya didalam constructor functionnya, maka otmatis semua object yang kita punya memilikinya.

function MobilIndonesia() { // Mobil merupakan Class atau Constructor Function
  this.type = ""
  this.tahun = ""  // Jika sebuah property dikosongkan atau off, sebenarnya tidak mengapa, hanya saja untuk menjaga konsistensi.
  this.introduction = function(nama) {
    console.info(`Memperkenalkan mobil ${nama}, dengan tipe ${this.type}, tahun rilis ${this.tahun}`)
  }
}
const Honda = new MobilIndonesia()
Honda.type = "G"  // sebuah property bisa saja ditambahkan langsung seperti ini.
Honda.tahun = "2025"
Honda.introduction("HRV")

const Toyota = new MobilIndonesia()
Toyota.tahun = "2023"

console.log(Honda);
console.log(Toyota);
*/


// parameter di ConsFunc
// karena CF merupakan function biasa, maka kit abisa menambahkann parameter didalamnya, dan ini akan memudahkan kita dalam mengisikan sebuah property



function MobilIndonesia(type, tahun) { 
  this.type = type // dengan memberikan value dari parameter tersebut maka kita tidak perlu lagi khawatir dengan isinya
  this.tahun = tahun  // karena kita memasukannya di dalam sebuah objecct
  this.introduction = function(nama) {
    console.info(`Memperkenalkan mobil ${nama}, dengan tipe ${this.type}, tahun rilis ${this.tahun}`)
  }
}
const Honda = new MobilIndonesia("G", 2025) // nah dengan mengisinya seperti ini, kita bisa me-nonaktifkan property yang kita buat secara manual.
// Honda.type = "G"  
// Honda.tahun = "2025"
Honda.introduction("HRV")

const Toyota = new MobilIndonesia("A", "2019")
// Toyota.tahun = "2023"
Toyota.introduction("Alphard")

console.log(Honda);
console.log(Toyota);


