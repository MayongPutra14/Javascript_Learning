//  Apa itu Single-Threaded di JavaScript?
// Single-threaded artinya hanya ada SATU jalur eksekusi.

// 🔹 Thread itu ibarat jalur atau orang yang mengerjakan tugas.

// Bayangkan kamu cuma punya 1 tangan buat kerja:

// Kalau mau bikin kopi:

// Nyalain kompor.

// Tunggu air panas.

// Tuang air.

// Aduk kopi.

// Semua dilakukan satu per satu.
// Kamu tidak bisa melakukan dua hal persis bersamaan.


function pertama() {
  console.log("Pertama");
}

function kedua() {
  console.log("Kedua");
}

pertama();
kedua();
