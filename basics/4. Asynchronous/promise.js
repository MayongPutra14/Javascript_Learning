// Ini callback menggunakan cara manual, dan ini merupakan cara yang benar, namun terasa lebih lama
// Callback version manual
// function request(url, succes, error) {
//   const delay = Math.floor(Math.random() * 4500) + 500;

//   setTimeout(() => {
//     if (delay > 4500) {
//       error("Error: delay more than 4500ms");
//     } else {
//       succes(`Success: ${url} (${delay}ms)`);
//     }
//   });
// }

// request(
//   "Gilang.com",
//   function (pesan) {
//     console.log("Success: we did it", pesan);
//   },
//   function (pesanError) {
//     console.log("Error: Try again!", pesanError);
//   }
// );

// Callback promise vesion
// const janji = new Promise((resolve, reject) => {
//   let berhasil = true;
//   if (berhasil == true) {
//     resolve("Yey....I did it!");
//   } else {
//     reject("No....I'm failed");
//   }
// });
// console.log(janji);







// Apa Itu Promise?
// Promise itu artinya JANJI.

// Bayangkan kamu pesan kue:

// 🎂 Kamu bilang:

// "Tolong buatkan kue. Nanti kalau sudah jadi, kasih tahu aku."

// Nah, janji ini bisa punya 3 keadaan:

// 1️⃣ Pending = Masih proses bikin kuenya
// 2️⃣ Fulfilled = Kuemu sudah jadi (berhasil)
// 3️⃣ Rejected = Kuenya gagal dibuat (gagal)

// Bagaimana Cara Menjalankan dan Menerima Pesan?
// Kamu pakai:

// .then() untuk hasil sukses

// .catch() untuk hasil gagal

// Cara membuat promise yang benar
console.log("Ngajak main....");
const main = (nama) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (nama === "") {
        reject("Tidak ada yang mau main!");
      } else {
        resolve(`Hi! ${nama}, Ayu kita main`);
      }
    }, 2000);
  });
};



main("Gilang").then((result) =>{
  console.log('Mengajak 1');
  console.log(result);
  return main("Syifa")
}).then((result) => {
  console.log('Mengajak 2');
  console.log(result);
  return main("")
}).then((result) => {
  console.log("Mengajak 3");
  console.log(result);
  return main("Muhammad");
}).catch((err) =>{
  console.log(err);
})