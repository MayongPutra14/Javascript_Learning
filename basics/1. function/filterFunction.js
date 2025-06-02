
// filter Angka > 0
const data = [-3, -1, 0, 2, 4, -2, 5];

// TODO: Gunakan filter untuk mengambil hanya angka yang lebih dari 0

const hasil = data.filter((refine) => refine > 0)

console.log(hasil); // Jawaban yang diharapkan: [2, 4, 5]




// filter Nama yang huruf nya lebih dari 4
const nama = ["Ana", "Budi", "Citra", "Dewi", "Raka", "Salsabila"];

// TODO: Saring nama yang panjangnya lebih dari 4 huruf

const panjang = nama.filter((namaBaru) =>namaBaru.length > 4);

console.log(panjang); // Jawaban: ["Citra", "Dewi", "Salsabila"]



// Filter bilangan genap
const angka = [10, 15, 20, 21, 22, 25, 30];

// TODO: Ambil hanya angka genap

const genap = angka.filter((even) => even % 2 == 0);

console.log(genap); // Jawaban: [10, 20, 22, 30]


// Saring Produk yang tersedia
const produk = [
  { nama: "Laptop", stok: 10 },
  { nama: "Headphone", stok: 0 },
  { nama: "Mouse", stok: 5 },
  { nama: "Keyboard", stok: 0 }
];

// TODO: Ambil hanya produk dengan stok lebih dari 0

const tersedia = produk.filter((available) => available.stok > 0).map((available) => available.nama);

console.log(tersedia);
// Jawaban: Array berisi Laptop dan Mouse



// Filter siswa yang lulus
const siswa = [
  { nama: "Adi", nilai: 60 },
  { nama: "Bella", nilai: 85 },
  { nama: "Cici", nilai: 78 },
  { nama: "Dion", nilai: 50 }
];

// TODO: Ambil siswa dengan nilai >= 75

const lulus = siswa.filter((graduate) => graduate.nilai >= 75).map((siswa) => siswa.nama );

console.log(lulus);
// Jawaban: Array berisi Bella dan Cici


