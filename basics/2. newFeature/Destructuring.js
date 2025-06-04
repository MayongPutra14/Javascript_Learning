// Destructuring Array
// latihan 1
// const siswa = ["Gilang", 17, "IPA"];
// const [nama, , jurusan] = siswa
// console.log(nama);
// console.log(jurusan);


// // latihan 2
// const angka = [5];
// const [a =[5],  b = 100 ]= angka
// console.log(a);
// console.log(b);


// // latihan 3 hanya lewat



// // latihan 4
// const respon = ["OK", 200, "Berhasil"];
// const [isOk, , check] = respon
// console.log(isOk);
// console.log(check);


// // latihan 5
// const data = [9, 8, 7];
// const satu = data[0];
// const dua = data[1];
// const tiga = data[2];
// const [first, second, third] = data
// console.log(first);
// console.log(second);
// console.log(third);




// Destructuring In a Object

// Task 1
// const siswa = {
//   nama: "Gilang",
//   umur: 17,
//   jurusan: "IPA"
// };

// const {nama, jurusan} = siswa
// console.log(nama);


// // Taks 2
// const nilai = {
//   matematika: 90
// };

// const {matematika, bahasaInggris = 80} = nilai
// console.log(`Matermatika: ${matematika} dan Bahasa Inggris:  ${bahasaInggris}`);


// // Tasks 3
// const mobil = {
//   merek: "Toyota",
//   tahun: 2020
// };

// const {merek:merkMobil, tahun} = mobil
// console.log(`Merk Mobil adalah: ${merkMobil} keluaran tahun:${tahun}`);

// // Task 4
// const film = {
//   judul: "Inception",
//   sutradara: "Christopher Nolan"
// };

// const {judul:title, year = 2010, sutradara: director, durasi = "1:20:00"} = film
// console.log('Judul film: ', title);
// console.log('Tahun Terbit: ', year);
// console.log('Sutradara: ', director);
// console.log('Durasi: ', durasi);


// // Nested Destructuring
// // task 1
// const buku = {
//   judul: "Atomic Habits",
//   penulis: {
//     nama: "James Clear",
//     email: "james@atomic.com"
//   }
// };

// const {judul:title, penulis:{email, nama}} = buku

// console.log(`Title: ${title}`);
// console.log(`Email: ${email}`);


// // Destructuring Parameters Function
// const tampilkanMahasiswa = ({nama, jurusan, umur}) =>{
//     console.log(`Nama: ${nama}`);
//     console.log(`Jurusan: ${jurusan}`);
//     console.log(`Usia: ${umur}`);
// }

// tampilkanMahasiswa({ nama: "Dian", jurusan: "IPS", umur: 18 });



// Latihan level 2
// Destructuring Array
const data = [
    1, 
    [2, 3],
     4
]; // saya memecahnya menjadibagian kecil agar saya faham

const [first,[second, third], fourth] = data
console.log(first,second, third, fourth );




// Destructuring Object
const akun = {
  username: "gilang_m",
  detail: {
    umur: 17,
    status: "aktif"
  },
  email: "gilang@example.com"
};

const {
    username:user,
    detail:{umur:usia, status: isActive},
    email = "Email tidak ada"
} = akun


console.log(`User: ${user}`);
console.log(`Age: ${usia}`);
console.log(`Status: ${isActive}`);
console.log(`Email: ${email}`);




// Default Value & Rename
const pengaturan = {
  tema: "gelap"
};


const {
    tema:mode,
    bahasa = "id"
} = pengaturan


console.log(mode, bahasa);


// Nested Object Destructuring
const server = {
  config: {
    host: "localhost",
    port: 8080
  },
  status: "online"
};

const {config:{host, port}, status} = server


console.log(server); // Saya menyederhanakan saa prof, maaf, saya lelah mengetik



// Destructuring Parameter Function
let cetakTransaksi = ({id, total, metode}) => {
    console.log(`ID: ${id}`);
    console.log(`Total: ${total}`);
    console.log(`Metode: ${metode}`);
} 

cetakTransaksi({ id: 123, total: 10000, metode: "QRIS" });


