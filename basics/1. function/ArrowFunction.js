// Arrow Fuction adalah bentuk penulisan yang lebihh ringkas dibanding dengan
// fungsi yang tradisional
// dan arrow function sering di tulis di dalam variabel, agar bisa digunakan kembali

// regular or traditional Function
function sapa() {
    return "Hello Wolrd"
}
console.log(sapa());

// function Expression
const hasil = function(x) {
    return x * x
}
console.log(hasil(6));

// function arrow
const perpangkatan = (y) => {
    return y ** y
}
 console.log(perpangkatan(5));

// kode lebih ringkas jika hanya menghasilkan satu nilai
const perpangkatanlagi = (y, z) =>  y ** z

 console.log(perpangkatan(5, 2));

// latihan 4 function without parameters
const ucapanPagi = () => {
    setTimeout(() => {
        console.log("Selamat Pagi.... ^_^");
    }, 3000);
}
ucapanPagi()
console.log("Nunggu Apa hayo....");

// latihan 5 Function dengan nilai
const penjumlahan = (x, y) => x + y;
const pengurangan = (i, j) => i - j;

console.log(penjumlahan(5, 5));
console.log(pengurangan(5, 6));

// latihan 6  Callback Sederhana
function jalankanFungsi(fn) {
  fn(); // jalankan fungsi yang dikirim
}
jalankanFungsi(() => console.log("Fungsi dijalankan!"));

// latihan 7 ganjil genap
// const gg = (x) => {
//   if (x % 2 == 0) {
//     return true;
//   } else {
//     return false;
//   }
// };


// lebih ringkas
const gg = x => x % 2 === 0;
console.log(gg(4));
console.log(gg(5));
