/**latihan 1:  Membuat Hierarki Objek Sederhana


function Hewan(nama){
    this.nama = nama

    this.besuara = function(){
        console.info(`${this.nama}, Hewan ini bersuara.`);
    }
}

function Anjing(nama, jenis) {
    this.jenis = jenis
    Hewan.call(this, nama)

    this.suara = function(){
        console.log(`Guk guk!!`);
    }
}


const siAnjing = new Anjing("Helder"," Golden Retriever")
siAnjing.besuara()
siAnjing.suara()
// console.log(siAnjing);



function Kucing(nama, warnaBulu) {
    this.warnaBulu = warnaBulu
    Hewan.call(this, nama)

    this.suara = function(){
        console.log("Meong meong!!");
    }
}

const siKucing = new Kucing("Miko"," Oranye")
siKucing.besuara()
siKucing.suara()
console.log(siKucing);
 */
/* Latihan 1: yang benar
// Objek dasar: Hewan
function Hewan(nama) {
    this.nama = nama;
}

// Menambahkan metode bersuara ke prototype Hewan
// Ini memastikan metode ini diwarisi dan tidak dibuat ulang untuk setiap instance
Hewan.prototype.bersuara = function() {
    console.info(`${this.nama}, Hewan ini bersuara.`);
};

// Objek Anjing mewarisi dari Hewan
function Anjing(nama, jenis) {
    // Memanggil konstruktor Hewan untuk menginisialisasi properti 'nama'
    Hewan.call(this, nama);
    this.jenis = jenis;
}

// Menetapkan prototype Anjing agar mewarisi dari prototype Hewan
// Objek.create() membuat objek baru dengan prototype yang ditentukan
Anjing.prototype = Object.create(Hewan.prototype);
// Penting: Kembalikan konstruktor Anjing yang benar
// Jika tidak, semua instance Anjing akan memiliki constructor Hewan
Anjing.prototype.constructor = Anjing;

// Menimpa (override) metode bersuara untuk Anjing
Anjing.prototype.bersuara = function() {
    console.log(`Guk guk!`);
};

// Objek Kucing mewarisi dari Hewan
function Kucing(nama, warnaBulu) {
    // Memanggil konstruktor Hewan untuk menginisialisasi properti 'nama'
    Hewan.call(this, nama);
    this.warnaBulu = warnaBulu;
}

// Menetapkan prototype Kucing agar mewarisi dari prototype Hewan
Kucing.prototype = Object.create(Hewan.prototype);
// Kembalikan konstruktor Kucing yang benar
Kucing.prototype.constructor = Kucing;

// Menimpa (override) metode bersuara untuk Kucing
Kucing.prototype.bersuara = function() {
    console.log("Meong meong!");
};

// Pengujian
const siAnjing = new Anjing("Helder", "Golden Retriever");
siAnjing.bersuara(); // Output: Guk guk! (berhasil menimpa)
console.log(siAnjing.nama); // Output: Helder
console.log(siAnjing.jenis); // Output: Golden Retriever

const siKucing = new Kucing("Miko", "Oranye");
siKucing.bersuara(); // Output: Meong meong! (berhasil menimpa)
console.log(siKucing.nama); // Output: Miko
console.log(siKucing.warnaBulu); // Output: Oranye

*/

/* Latihan 2: Menambahkan Metode ke Prototype yang Sudah Ada
function Pengguna(nama, email) {
    this.nama = nama
    this.email = email
}

const User1 = new Pengguna("Gilang", "Gilang@gmail.com")
const User2 = new Pengguna("Syifa", "Syifa@gmail.com")

Pengguna.prototype.sapa = function() {
    console.info(`Halo, nama saya ${this.nama}`);
}

User1.sapa()
User2.sapa()
*/


/* latihan 3:  Memahami hasOwnProperty dan in Operator
function PrototypeMobil() {
  this.roda = 4;

  this.nyalakanMesin = function () {
    console.log("Mesin Menyala!!");
  };
}

function MobilSaya() {
  this.merk = "Toyota";
  this.tahun = 2020;
  PrototypeMobil.call(this);
}

MobilSaya.hasOwnProperty("merk");
MobilSaya.hasOwnProperty("roda");
"merk" in MobilSaya;
"roda" in MobilSaya;
MobilSaya.hasOwnProperty("nyalakanMesin");
"nyalakanMesin" in MobilSaya;
*/
/*// latihan 3: Yang benar
// Objek prototype dasar
function PrototypeMobil() {
    this.roda = 4; // Ini akan menjadi properti instance jika digunakan dengan 'new'
    // Seharusnya ada di prototype jika ingin diwarisi sebagai properti prototype
    // PrototypeMobil.prototype.roda = 4; <-- ini jika ingin diwarisi dari prototype
}

// Menambahkan metode ke prototype PrototypeMobil
PrototypeMobil.prototype.nyalakanMesin = function() {
    console.log("Mesin Menyala!!");
};

// Fungsi konstruktor MobilSaya
function MobilSaya(merk, tahun) { // Tambahkan parameter untuk inisialisasi properti
    // Memanggil konstruktor PrototypeMobil untuk mewarisi properti instance (jika ada)
    // Dalam kasus ini, 'roda' akan menjadi properti instance jika PrototypeMobil dibuat dengan 'new'
    PrototypeMobil.call(this);

    this.merk = merk; // Properti langsung
    this.tahun = tahun; // Properti langsung
}

// Menetapkan prototype MobilSaya agar mewarisi dari prototype PrototypeMobil
MobilSaya.prototype = Object.create(PrototypeMobil.prototype);
// Kembalikan konstruktor MobilSaya yang benar
MobilSaya.prototype.constructor = MobilSaya;

// Membuat instance dari MobilSaya
const mobilSayaInstance = new MobilSaya("Toyota", 2020);

console.log(`mobilSayaInstance.hasOwnProperty('merk'): ${mobilSayaInstance.hasOwnProperty('merk')}`); // true
console.log(`mobilSayaInstance.hasOwnProperty('roda'): ${mobilSayaInstance.hasOwnProperty('roda')}`); // true (karena roda ditambahkan lewat PrototypeMobil.call(this))
console.log(`'merk' in mobilSayaInstance: ${'merk' in mobilSayaInstance}`); // true
console.log(`'roda' in mobilSayaInstance: ${'roda' in mobilSayaInstance}`); // true
console.log(`mobilSayaInstance.hasOwnProperty('nyalakanMesin'): ${mobilSayaInstance.hasOwnProperty('nyalakanMesin')}`); // false
console.log(`'nyalakanMesin' in mobilSayaInstance: ${'nyalakanMesin' in mobilSayaInstance}`); // true

/*
Penjelasan Perbedaan Hasil:

1.  mobilSayaInstance.hasOwnProperty('merk'): true
    Properti 'merk' langsung ada di objek mobilSayaInstance.

2.  mobilSayaInstance.hasOwnProperty('roda'): true
    Properti 'roda' juga langsung ada di objek mobilSayaInstance karena kita memanggil `PrototypeMobil.call(this)` di dalam konstruktor `MobilSaya`. Jika `roda` diletakkan di `PrototypeMobil.prototype.roda = 4;`, maka hasilnya akan `false` untuk `hasOwnProperty`.

3.  'merk' in mobilSayaInstance: true
    Operator 'in' memeriksa apakah properti 'merk' ada di objek itu sendiri ATAU di rantai prototipenya. Karena 'merk' ada langsung di objek, hasilnya true.

4.  'roda' in mobilSayaInstance: true
    Sama seperti 'merk', 'roda' ada langsung di objek (karena `PrototypeMobil.call(this)`), jadi hasilnya true.

5.  mobilSayaInstance.hasOwnProperty('nyalakanMesin'): false
    Metode 'nyalakanMesin' tidak dimiliki langsung oleh mobilSayaInstance. Ia diwarisi dari `PrototypeMobil.prototype`.

6.  'nyalakanMesin' in mobilSayaInstance: true
    Operator 'in' memeriksa di objek itu sendiri dan di rantai prototipenya. Karena 'nyalakanMesin' ada di `PrototypeMobil.prototype` (yang merupakan bagian dari rantai prototipe mobilSayaInstance), hasilnya true.

*/








