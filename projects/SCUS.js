const lirik1 =
  "Bila Musim Bergan...ti....\nSampai Waktu terhen...ti.....\nWalau Dunia Memben.....ci.....\nKu kan Tetap Disi.....ni...\n\tBila Habis Sudah\n\tWaktu Ini\n\tTak lagi Berpijak\n\tPada Dunia, Walau Aku Habiskan\n\tSisa Hidupku\n\tHanya Untuk Mu.....";
let sambungLirik = "";
let index = 0;
const firstinterval = setInterval(() => {
  if (index < lirik1.length) {
    sambungLirik += lirik1[index];
    console.clear();
    console.log("Surat Cinta Untuk Starla❤️❤️");

    console.log(sambungLirik);
    index++;
  } else {
    clearInterval(firstinterval);
  }
}, 160);