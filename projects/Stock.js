const prompt = require("prompt-sync")();

// Storage of Data
let dataBarang = [
  {
    sku: "ELC001",
    namaBarang: "Laptop Gaming",
    jumlahBarang: 15,
    hargaBarang: 15000000,
  },
  // {
  //   sku: "FOD005",
  //   namaBarang: "Mie Instan Goreng",
  //   jumlahBarang: 200,
  //   hargaBarang: 3500,
  // },
  // {
  //   sku: "CLT010",
  //   namaBarang: "T-Shirt Katun",
  //   jumlahBarang: 5000,
  //   hargaBarang: 75000,
  // },
  // {
  //   sku: "HOU003",
  //   namaBarang: "Sapu Lantai",
  //   jumlahBarang: 30,
  //   hargaBarang: 25000,
  // },
  // {
  //   sku: "ELC002",
  //   namaBarang: "Mouse Nirkabel",
  //   jumlahBarang: 75,
  //   hargaBarang: 120000,
  // },
  // {
  //   sku: "FOD006",
  //   namaBarang: "Kopi Bubuk",
  //   jumlahBarang: 120,
  //   hargaBarang: 18000,
  // },
  // {
  //   sku: "FOD007",
  //   namaBarang: "Susu Kental Manis",
  //   jumlahBarang: 150,
  //   hargaBarang: 12000,
  // },
  // {
  //   sku: "CLT012",
  //   namaBarang: "Celana Jeans",
  //   jumlahBarang: 35,
  //   hargaBarang: 185000,
  // },
  // {
  //   sku: "HOU005",
  //   namaBarang: "Gelas Kaca",
  //   jumlahBarang: 60,
  //   hargaBarang: 10000,
  // },
  // {
  //   sku: "ELC003",
  //   namaBarang: "Power Bank 10.000mAh",
  //   jumlahBarang: 22,
  //   hargaBarang: 160000,
  // },
  // {
  //   sku: "FOD008",
  //   namaBarang: "Biskuit Coklat",
  //   jumlahBarang: 100,
  //   hargaBarang: 8500,
  // },
  // {
  //   sku: "CLT013",
  //   namaBarang: "Topi Baseball",
  //   jumlahBarang: 40,
  //   hargaBarang: 55000,
  // },
  // {
  //   sku: "HOU006",
  //   namaBarang: "Piring Melamin",
  //   jumlahBarang: 80,
  //   hargaBarang: 7000,
  // },
  // {
  //   sku: "ELC004",
  //   namaBarang: "Kabel Data USB-C",
  //   jumlahBarang: 75,
  //   hargaBarang: 30000,
  // },
];

// Name Columns
const nameColumns = {
  no: "No",
  sku: "Kode SKU",
  namaBarang: "Nama Barang",
  jumlahBarang: "Jumlah Barang",
  hargaBarang: "Harga Barang",
};

// Dashboard menu
function dashboard() {
  let running = true;
  while (running) {
    console.clear();
    console.log("=====================================");
    console.log("         MENU CRUD DATA Barang      ");
    console.log("=====================================");
    console.log(" [1] Create Data Barang");
    console.log(" [2] Read Data Barang");
    console.log(" [3] Update Data Barang");
    console.log(" [4] Delete Data Barang");
    console.log(" [5] Exit Program");
    console.log("=====================================");
    let pilihanMenu = parseInt(prompt("Silakan pilih menu (1-5): "));

    switch (pilihanMenu) {
      case 1:
        createData();
        break;
      case 2:
        readData();
        break;
      case 3:
        updateData();
        break;
      case 4:
        deletedData();
        break;
      case 5:
        console.clear();
        running = false;
        break;
      default:
        console.log("Pilihan Tidak ada!!");
        console.log("".padEnd(10), "Tekan Enter untuk melanjutakn...");
        prompt("");
        console.clear();
        break;
    }
  }
}
dashboard();

// Details of data barang
function displayDetails() {
  console.log();
  let time = new Date();
  let hours = time.toLocaleString("id-ID", {
    hour: "2-digit",
    minute: "numeric",
    hour12: false,
  });
  console.log(`Waktu: ${hours} WIB`);

  const DMY = time.toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  console.log("Tanggal:", DMY);

  const total = dataBarang.length;
  console.log(`Total Data: ${total}`);
  console.log();
}

// Push data to array dataBarang: used in createData()
function pushDataToArray() {
  console.log("=====================================");
  console.log("         CREATE DATA BARANG          ");
  console.log("=====================================");
  console.log("Silakan masukkan data barang baru:");
  console.log();
  let sku = prompt(`> Kode Barang ke-${dataBarang.length + 1}: `);
  let nama = prompt("> Nama Barang: ");
  let jumlahBarang = parseInt(prompt("> Jumlah Barang: "));
  let hrgBarang = parseInt(prompt("> Harga Barang: RP."));

  dataBarang.push({
    sku: sku,
    namaBarang: nama,
    jumlahBarang: jumlahBarang,
    hargaBarang: hrgBarang,
  });
}

function confirmationCreateData() {
  console.log("\n===========================================");
  console.log("Apa yang ingin Anda lakukan selanjutnya?");
  console.log("════════════════════════════════════════════");
  console.log("[1] Tambah Barang Lain");
  console.log("[2] Lihat Data");
  console.log("[3] Kembali ke Menu Utama");
  console.log("");
  console.log("═══════════════════════════════════════════════════════");
  let exit = parseInt(prompt("Masukkan pilihan Anda: "));
  switch (exit) {
    case 1:
      console.clear();
      return "repeat";
    case 2:
      return "readData";
    case 3:
      return "exit";
    default:
      console.log("Pilihan Tidak ada!!");
      prompt("".padEnd(10), "Tekan Enter untuk melanjutakn...");
      console.clear();
      return confirmationCreateData();
  }
}

// Create Data
function createData() {
  console.clear();
  let isActive = true;
  while (isActive) {
    // Call pushDataToArray()
    pushDataToArray();

    // Call Confirmation
    let next = confirmationCreateData();

    // Validation Input
    if (next === "repeat") continue;
    if (next === "readData") return readData();
    if (next === "exit") return;
  }
}

// Display data for Read, Update, and Delete
function displayData() {
  console.clear();

  // Value of columns width
  const columnsWidth = {
    no: 3,
    sku: 9,
    namaBarang: 20,
    jumlahBarang: 15,
    hargaBarang: 15,
  };

  // Convert Value of columns width
  const pad = (field, width) => String(field).padEnd(width);

  // Create Colom Title
  const colums = `| ${pad(nameColumns.no, columnsWidth.no)}| ${pad(
    nameColumns.sku,
    columnsWidth.sku
  )}| ${pad(nameColumns.namaBarang, columnsWidth.namaBarang)} | ${pad(
    nameColumns.hargaBarang,
    columnsWidth.hargaBarang
  )} | ${pad(nameColumns.jumlahBarang, columnsWidth.jumlahBarang - 1)}|`;

  // call display details
  displayDetails();

  console.log("-".repeat(74));
  console.log(colums);
  console.log("-".repeat(74));
  if (dataBarang.length === 0) {
    console.log("".padEnd(25), "❕ TIDAK ADA DATA ❕ ");
    console.log();
  }

  // Print Data
  dataBarang.forEach((data, index) => {
    let baris = `| ${pad(index + 1, columnsWidth.no)}| ${pad(
      data.sku,
      columnsWidth.sku
    )}| ${pad(
      data.namaBarang,
      columnsWidth.namaBarang.toLocaleString()
    )} | Rp.${pad(
      data.hargaBarang.toLocaleString(),
      columnsWidth.hargaBarang - 3
    )} | ${pad(
      data.jumlahBarang.toLocaleString(),
      columnsWidth.jumlahBarang - 3
    )}  |`;

    console.log(baris);
    console.log("-".repeat(74));
  });
}

// Read Data
function readData() {
  console.clear();
  while (true) {
    // Visualisation
    displayData();
    while (true) {
      // Call displayData()

      // Option Next
      console.log("\n", "✨ Apa yang ingin Anda lakukan selanjutnya? ✨");
      console.log("═══════════════════════════════════════════════════════");
      console.log(` [1] ➤ Tambah Data Baru`);
      console.log(` [2] ➤ Filter Data`);
      console.log(` [3] ➤ Update Data`);
      console.log(` [4] ➤ Hapus Data`);
      console.log(` [5] ➤ Kembali ke Menu Utama`);
      console.log("═══════════════════════════════════════════════════════");
      let exit = parseInt(prompt("Masukkan pilihan Anda: "));

      switch (exit) {
        case 1:
          return createData();
        // case 2:
        //   console.log("Pilihan Tidak ada!!");
        //   console.log("".padEnd(10), "Tekan Enter untuk melanjutakn...");
        //   prompt("");
        //   console.clear();
        //   continue;
        case 3:
          return updateData();
        case 4:
          return deletedData();
        case 5:
          console.clear();
          return false;
        default:
          console.log("Pilihan Tidak ada!!");
          console.log("".padEnd(10), "Tekan Enter untuk melanjutakn...");
          prompt("");
          console.clear();
          continue;
      }
    }
  }
}

// Update Data
function updateData() {
  // console.table(dataBarang)nameColumns = {
  const propertyLabels = {
    sku: "SKU",
    namaBarang: "Nama Barang",
    jumlahBarang: "Jumlah Barang",
    hargaBarang: "Harga Barang",
  };

  while (true) {
    console.clear();
    // Call displayData
    displayData();

    let pilih = prompt("Pilih data yang akan di ubah: ");
    const nomorBarang = pilih - 1;
    console.clear();

    for (const data of Object.keys(propertyLabels)) {
      console.log("===========================================");
      console.log("         DETAIL DATA YANG DIPILIH          ");
      console.log("===========================================");
      console.log(`> SKU           : ${dataBarang[nomorBarang].sku}`);
      console.log(`> Nama Barang   : ${dataBarang[nomorBarang].namaBarang}`);
      console.log(
        `> Jumlah Barang : ${dataBarang[
          nomorBarang
        ].jumlahBarang.toLocaleString()}`
      );
      console.log(
        `> Harga Barang  : Rp.${dataBarang[
          nomorBarang
        ].hargaBarang.toLocaleString()}`
      );
      console.log("===========================================");
      console.log("Tekan Enter Untuk Melewati...");
      console.log();
      const label = propertyLabels[data];
      const dataLama = dataBarang[nomorBarang][data];
      const display =
        data === "hargaBarang" ? "Rp" + dataLama.toLocaleString() : dataLama;

      console.log(`${label} Lama : ${display}`);
      const ubahData = prompt(`Masukan data ${label} baru: `);

      if (ubahData.trim() !== "") {
        if (data === "jumlahBarang" || data === "hargaBarang") {
          dataBarang[nomorBarang][data] = parseInt(ubahData);
        } else {
          dataBarang[nomorBarang][data] = ubahData;
        }
      }
      console.clear();
    }

    console.log("===========================================");
    console.log("     DETAIL DATA YANG TELAH DI UPDATE         ");
    console.log("===========================================");
    console.log(`> SKU           : ${dataBarang[nomorBarang].sku}`);
    console.log(`> Nama Barang   : ${dataBarang[nomorBarang].namaBarang}`);
    console.log(`> Jumlah Barang : ${dataBarang[nomorBarang].jumlahBarang}`);
    console.log(
      `> Harga Barang  : Rp.${dataBarang[
        nomorBarang
      ].hargaBarang.toLocaleString()}`
    );
    console.log("===========================================");
    console.log("✅ Data berhasil diperbarui!");
    console.log("===========================================\n");

    let running = true;
    while (running) {
      console.log("\n===========================================");
      console.log("Apa yang ingin Anda lakukan selanjutnya?");
      console.log("════════════════════════════════════════════");
      console.log("[1] ➤ Update Data Lain");
      console.log("[2] ➤ Tampilkan Data Terbaru");
      console.log("[3] ➤ Kembali ke Menu Utama");
      console.log("════════════════════════════════════════════\n");
      let exit = parseInt(prompt("Masukkan pilihan Anda: "));

      switch (exit) {
        case 1:
          running = false;
          break;
        case 2:
          return readData();
        case 3:
          console.clear();
          return;
        default:
          console.log("Pilihan Tidak ada!!");
          console.log("".padEnd(10), "Tekan Enter untuk melanjutakn...");
          prompt("");
          console.clear();
          continue;
      }
    }
  }
}

// Delete Data Section
// Refactor Main Function of Confirm to delete data
function deleteYes() {
  let pilih = getValidInputIndex(dataBarang.length);
  if (pilih === null) return;

  const barang = dataBarang[pilih];
  displayDataBarang(barang);

  if (deleteConfirmation(barang)) {
    deleteBarang(dataBarang, pilih);
    successMesage();
  }

  return finalValidationDelete();
}

// get input number of barang
function getValidInputIndex(maxLength) {
  while (true) {
    displayData();
    console.log("\n[0] ➤ Kembali ke Menu Delete Data");
    console.log("════════════════════════════════════════════\n");

    const input = parseInt(prompt("Pilih data yang akan dihapus: "));
    if (input === 0) return null;

    if (isNaN(input) || input < 1 || input > maxLength) {
      console.log(`Data Nomor Tidak Ada!!`);
      prompt("Tekan Enter Untuk Melanjutkan...");
      continue;
    }

    return input - 1; // karena user pilih dari 1, index array dari 0
  }
}

// print choosen data
function displayDataBarang(dataBarang) {
  console.clear();
  console.log("===========================================");
  console.log("            HAPUS DATA BARANG              ");
  console.log("===========================================");
  console.log(`> SKU           : ${dataBarang.sku}`);
  console.log(`> Nama Barang   : ${dataBarang.namaBarang}`);
  console.log(`> Jumlah Barang : ${dataBarang.jumlahBarang}`);
  console.log(
    `> Harga Barang  : Rp.${dataBarang.hargaBarang.toLocaleString()}`
  );
}

// Delete Confirmation y/n
function deleteConfirmation(dataBarang) {
  while (true) {
    displayDataBarang(dataBarang);
    console.log("-------------------------------------------");
    console.log("⚠️  PERINGATAN!");
    console.log("   Data yang Anda pilih akan dihapus secara permanen.");
    console.log("   Setelah dihapus, data TIDAK DAPAT dikembalikan.");
    console.log("-------------------------------------------");
    const hapus = prompt("Apakah Anda yakin ingin menghapus data ini? (y/n): ");
    if (hapus.toLowerCase() === "y") {
      return true;
    } else if (hapus.toLowerCase() === "n") {
      return false;
    } else {
      console.log("Pilihan Tidak ada!!");
      console.log("".padEnd(10), "Tekan Enter untuk melanjutakn...");
      prompt("");
      console.clear();
      continue;
    }
  }
}

// Delete Barang
function deleteBarang(array, index) {
  array.splice(index, 1);
}

// Succes Mesage
function successMesage() {
  console.clear();
  console.log("\n===========================================");
  console.log("         ✅ DATA BERHASIL DIHAPUS!          ");
  console.log("===========================================");
  console.log("Data barang yang Anda pilih telah dihapus.");
  console.log("Data tidak dapat dikembalikan.");
  prompt("Tekan Enter untuk melanjutkan...");
}

// Confirm to do next step, after delete data
function finalValidationDelete() {
  console.clear();
  console.log("\n===========================================");
  console.log("Apa yang ingin Anda lakukan selanjutnya?");
  console.log("════════════════════════════════════════════");
  console.log("[1] ➤ Hapus Data Lain");
  console.log("[2] ➤ Tampilkan Data Terbaru");
  console.log("[3] ➤ Kembali ke Menu Utama");
  console.log("════════════════════════════════════════════\n");
  let exit = prompt("masukan pilihan anda: ");

  if (exit == 1) {
    return deleteYes();
  } else if (exit == 2) {
    return readData();
  } else if (exit == 3) {
    console.clear();
    return false;
  } else {
    return false;
  }
}

// Main function Delete Data
function deletedData() {
  let running = true;
  while (running) {
    console.clear();
    console.log("\n===========================================");
    console.log("              MENU DELETE DATA              ");
    console.log("===========================================");
    console.log("Apakah Anda ingin menghapus data barang?");
    console.log("════════════════════════════════════════════");
    console.log("[1] ➤ Ya, saya ingin menghapus data");
    console.log("[2] ➤ Tidak, kembali ke Menu Utama");
    console.log("════════════════════════════════════════════\n");

    const pilih = parseInt(prompt("Masukkan pilihan Anda: "));
    if (pilih === 1) {
      const hasil = deleteYes();
      if (hasil === false) {
        return;
      }
    } else if (pilih === 2) {
      return;
    }
  }
}
