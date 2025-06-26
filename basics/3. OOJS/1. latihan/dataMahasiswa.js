const prompt = require('prompt-sync')();
let value = [];


// Contructor Function Data Mahasiswa
function Datamahasiswa(name, nim, jurusan, ...nilai) {
  this.name = name;
  this.nim = nim;
  this.jurusan = jurusan;
  this.nilai = nilai;
  this.displayInfo = function () {
    console.log(`Nama: ${this.name}`);
    console.log(`NIM: ${this.nim}`);
    console.log(`Jurusan: ${this.jurusan}`);
  };

  this.tambahNilai = function () {
    value.push(this.nilai);
  };

  this.rerata = function () {
    let total = 0;
    for (let x of value) {
      for (let y of x) {
        total += y / this.nilai.length;
      }
    }
    console.log('Nilai Rata-rata: ',total);
  };
}

const Gilang = new Datamahasiswa(
  "Gilang",
  "22409923",
  "Teknik Informatika",
  70,
  90,
  85,
  95
);
Gilang.displayInfo();

// console.info(Gilang);

Gilang.tambahNilai();

// console.log(value);

Gilang.rerata();

// // const Syifa = new Datamahasiswa('Syifa', '1234', 'Teknik Kedokteran', 80,40, 30,90)

// // Syifa.tambahNilai()
// // Syifa.displayInfo()

// // console.log(Syifa);

// while (true){
//     let dataBaru = new Datamahasiswa()
// }
