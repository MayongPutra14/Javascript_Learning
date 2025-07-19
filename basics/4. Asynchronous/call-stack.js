// Call Stack itu ibarat tumpukan piring.
// Ketika JavaScript memanggil sebuah fungsi, piring baru diletakkan di atas tumpukan (push).
// Kalau fungsi itu selesai, piring diambil dari atas (pop).
function satu() {
  console.log("Fungsi Satu");
}

function dua() {
  console.log("Fungsi Dua");
  satu();
}

dua();


// 3. Bagaimana Asynchronous Bekerja dengan Call Stack?
// Saat ada fungsi Asynchronous, JavaScript TIDAK langsung mengeksekusi isinya di Call Stack.
// Sebaliknya:

//  Langkah-langkahnya (konsep Event Loop):

// Fungsi Asynchronous dipanggil.

// JavaScript mendaftarkan tugas ini ke Web API (browser).

// Call Stack langsung kosong lagi, tidak menunggu tugas selesai.

// Kalau tugas sudah selesai (misalnya timer habis), callback masuk ke Task Queue.

// Event Loop akan mengambil tugas di Task Queue dan memasukkannya ke Call Stack kalau Call Stack sedang kosong.


console.log("A");

setTimeout(() => {
  console.log("B");
}, 1000);

console.log("C");
