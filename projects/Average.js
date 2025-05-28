const mataKuliah = ["Bahasa Indonesia", "Matematika", "Bahasa Iggris", "Agama"];
let average = [];
let hasil = 0;

const prompt = require("prompt-sync")();

mataKuliah.forEach((nilai) => {
  inputNilai = parseInt(prompt(`Masukan Nilai ${nilai} Anda: `));
  average.push(inputNilai);
});

average.forEach((hitung) => {
  hasil += hitung
});

console.log(`Hasil Rata-rata Nilai Anda Adalah: ${hasil / average.length} `);