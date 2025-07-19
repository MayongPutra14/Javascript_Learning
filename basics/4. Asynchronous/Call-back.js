// Apa Itu Callback?
// Callback itu fungsi yang dikirim sebagai argumen ke fungsi lain, dan akan dipanggil kembali (callback) setelah tugas tertentu selesai.

//  Istilah gampangnya:

// “Fungsi yang akan dipanggil nanti.”

function sapa(nama) {
  console.log("Halo, " + nama);
}

function prosesUser(callback) {
  const namaUser = "Budi";
  callback(namaUser); // Fungsi callback dipanggil di sini
}

prosesUser(sapa);

// Urutan yang terjadi:

// prosesUser dijalankan.

// namaUser di-set jadi "Budi".

// callback(namaUser) → artinya sapa("Budi").

// Cetak: Halo, Budi.


// Contoh Callback Asynchronous (dipanggil belakangan)
// Ini yang sering dipakai dengan setTimeout atau saat ambil data:

function selesai() {
  console.log("Tugas sudah selesai!");
}

console.log("Mulai");

setTimeout(selesai, 2000);

console.log("Selesai setup");



// Urutannya:

// console.log("Mulai") → cetak: Mulai

// setTimeout mendaftarkan selesai ke timer 2 detik

// console.log("Selesai setup") → cetak: Selesai setup

// Setelah 2 detik, fungsi selesai() dipanggil → cetak: Tugas sudah selesai!


// Cara Menulis Callback
// 1. Mengirim Funsi bernama
setTimeout(selesai, 1000);

// Atau mengirim fungsi anonim (tanpa nama):
setTimeout(function() {
  console.log("Ini callback anonim!");
}, 1000);

// Atau menggunakan arrow function:
setTimeout(() => {
  console.log("Callback arrow function!");
}, 1000);


// Contoh lain yang sederhana
function ajakMain() {
  console.log("Yuk main!");
}

function panggilTeman(cb) {
  console.log("Aku mau manggil teman...");
  cb();
//   cb (atau callback) itu parameter.
// Saat kamu memanggil fungsi utama, kamu kirim argumen berupa fungsi lain.
// Nah, kalau kamu mau menjalankan fungsi itu, kamu wajib pakai ().
}

panggilTeman(ajakMain)// disini ajak main merupakan sebuah fucntion