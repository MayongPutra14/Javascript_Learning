// forEach()
// Struktur dasar callback foreach function
friends = ["Gilang", "Syifa", "Felcia", "Septian"]

friends.forEach(friend => {
    console.log(`Hallo, ${friend}`)
});


// Latihan Lanjut
numbers = [
    [2, 4, 6, 8, 10],
    [1, 3, 5, 7, 9]
]

numbers.forEach(number => {
    number.forEach(result =>{
        if (result % 2 == 0){
            console.log(`Nilai ${result}, adalah genap.`);
        }else{
            console.log(`Nilai ${result}, adalah ganjil.`);
        }
    });  
});


// Callback With Map()
// Konsep dasar
let angka = [10, 20, 30];

let hasil = angka.map(function(nilai, index, ini) {
  console.log(`Index: ${index}, Nilai: ${nilai}, Apaini: ${ini}`);
  return nilai + 5;
});

console.log(hasil);

// Latihan Menampilkan Array dengan format tertentu
let siswa = [
  { nama: "Andi", nilai: 75 },
  { nama: "Budi", nilai: 85 },
  { nama: "Citra", nilai: 60 },
  { nama: "Dewi", nilai: 90 }
];

rapot = siswa.map(function(name, index){
    if (name.nilai >= 80){
        console.log(`${index + 1} Nama: ${name.nama}, Status: Lulus, dengan  Nilai: ${name.nilai}`);
    }else{
        console.log(`${index + 1} Nama: ${name.nama}, Status: Tidak Lulus, dengan  Nilai: ${name.nilai}`);

    }
})


// perbaikan kode,
let siswa = [
  { nama: "Andi", nilai: 75 },
  { nama: "Budi", nilai: 85 },
  { nama: "Citra", nilai: 60 },
  { nama: "Dewi", nilai: 90 }
];

let rapot = siswa.map(function(item, index) {
  let status = item.nilai >= 70 ? "Lulus" : "Tidak Lulus";
  return `Nama: ${item.nama}, Nilai: ${item.nilai}, Status: ${status}, Index ke-${index}`;
});

rapot.forEach(baris => console.log(baris));
