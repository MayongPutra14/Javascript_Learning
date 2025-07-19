const workTeam = (nama, aktifitas, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (nama.length > 0 && aktifitas.length > 0) {
          console.log(
              `Halo aku ${nama}, aku sedang ${aktifitas}, kau menunggu selama ${
                  delay * 0.001
                } detik`
            );
            resolve();
      } else {
        reject("Tidak ada Aktifitas");
      }
    }, delay);
  });
};

// Menggunakan .then
// workTeam("Gilang", "Belajar")
//   .then((result) => {
//     console.log("Aktifitas 1");
//     console.log(result);
//     return workTeam("Felicia", "Mengaji")
//   })
//   .then((result) => {
//     console.log("Aktifitas 2");
//     console.log(result);
//     return workTeam("", "")
//   })
//   .then((result) => {
//     console.log("Aktifitas 3");
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });


//  Menggunakan await
async function letsWork() {
  await workTeam("Gilang", "Belajar", 1000);
  await workTeam("Felcia", "Masak", 2000);
  await workTeam("Syifa", "Olahraga", 500);
  await workTeam("Pandu", "Ngoding", 5000);
  return "Semua selesai!!";
}

async function run() {
    await letsWork()
    return "Aktifitas selesai dari run()"
}

run()