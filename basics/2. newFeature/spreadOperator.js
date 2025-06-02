// spread operator
//  Soal 1: Menyalin Array

// Buat array 'hobiBaru' yang merupakan salinan dari 'hobiLama'
// Tambahkan satu hobi baru ke 'hobiBaru' tanpa mengubah 'hobiLama'
// Cetak keduanya dan tunjukkan bahwa 'hobiLama' tidak ikut berubah

// let hobiLama = ["membaca", "berenang", "bersepeda"];
// let hobbiBaru = [...hobiLama, "Menonton"]

// console.log(hobiLama);
// console.log(hobbiBaru);

// // 2. Menggabungkan 2 array[]
// let makananFavorit = ["nasi goreng", "sate"];
// let minumanFavorit = ["teh manis", "jus mangga"];

// // Buat array 'menuHariIni' yang berisi semua makanan dan minuman
// // Cetak hasilnya

// let menuHariIni = [...makananFavorit,...minumanFavorit]
// console.log(menuHariIni);

// Soal 3: Menyebar ke Fungsi

// function tampilkanProfil(nama, umur, asal) {
//   console.log(`Halo, nama saya ${nama}, umur saya ${umur}, dari ${asal}.`);
// }

// let dataSiswa = ["Gilang", 17, "Bandung"];

// tampilkanProfil(...dataSiswa, )
// 👉 Gunakan spread operator untuk memanggil tampilkanProfil()
// tanpa menuliskan parameter satu per satu

let dataSiswa = {
    nama: "Gilang",
    umur: 17,
    asal: "Bandung"
};

let dataBaru = {...dataSiswa, hobi:"Membaca"}

console.log(dataSiswa);
console.log(dataBaru);








// Rest Parameter

// latihan 1 : 
// function cetakSemua(...semuaHal) {
//   console.log(semuaHal);
// }

// cetakSemua("Syifa", "Apel", 1, true);


// latihan 2:
// function totalNilai(...sumALL) {
//     return sumALL.reduce((acc, curr) => acc + curr) 
    
// }   
// console.log(totalNilai(1, 2, 3, 4));



// latihan 3:
function biodata(nama, umur,...hobi){   
    console.log(`Nama: ${nama}`);
    console.log(`Umur: ${umur}`);
    for(const element of hobi) {
        console.log(`Hobi: ${element}`);
        
    }
}

biodata("gilang", 17, "berenang", "memancing", "Membaca");