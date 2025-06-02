// Reduce
// Tugasmu:
// Gunakan reduce() untuk menghitung total harga semua produk.
// Gunakan reduce() untuk mengubah array produk menjadi objek seperti ini:

// const produk = [
//   { nama: 'Pensil', harga: 3000 },
//   { nama: 'Buku Tulis', harga: 5000 },
//   { nama: 'Penghapus', harga: 2000 },
//   { nama: 'Pulpen', harga: 4000 }
// ];

// const total = produk.reduce((acc, curr) =>{
//     return acc + curr.harga
// },0)

// console.log(total);

// Mengitung nilai rata-rata
// const nilai = [70, 85, 90, 65, 100];

// const totalNilai = nilai.reduce((currentValue, singleSubtotal) => {
//     return currentValue + singleSubtotal
// })

// console.log(`Total Nilai adalah: ${totalNilai}`);

// console.log(`Nilai Rata-rata siswa adalah: ${totalNilai / nilai.length}`);

// Mengguanakan this didalam sebuah object

// const buku = {
//   judul: 'Belajar JavaScript',
//   penulis: 'Prof. JS',
//   deskripsi: function() {
//     console.log(`Buku berjudul "${this.judul}" ditulis oleh ${this.penulis}`);
//   }
// };

// buku.deskripsi(); // Output yang diharapkan:
// Buku berjudul "Belajar JavaScript" ditulis oleh Prof. JS


// engkapilah kode berikut agar objek pengguna dapat memanggil fungsi perkenalkan dengan benar, menggunakan this.
// function perkenalkan() {
//   console.log(`Halo, saya ${this.nama}, umur saya ${this.umur} tahun.`);
// }

// const pengguna = {
//   nama: "Gilang",
//   umur: 17,
//   panggil: perkenalkan,
// };

// pengguna.panggil();
// Output yang diharapkan:
// Halo, saya Gilang, umur saya 17 tahun.



const murid = {
  nama: 'Gilang',
  umur: 17,
  perkenalkan: function() {
    console.log(`Halo, saya ${this.nama}, umur saya ${this.umur} tahun.`);
  },
  salam: function() {
    this.perkenalkan()
  }
};

murid.salam();
// Output yang diharapkan:
// Halo, saya Gilang, umur saya 17 tahun.

