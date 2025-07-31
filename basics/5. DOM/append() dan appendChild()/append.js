const praktikum = document.getElementById("praktikum");
const h3 = document.createElement("h3");
h3.textContent = "Daftar Belanja";

const list = document.createElement("ol");
list.innerHTML = `
  <li>Sayuran</li><li>Buah</li> <li>Daging</li>
  `;  // Jangan lupa untuk memberikan tag penutup, karena ini merupakan elemen HTML.
praktikum.append(h3, list, "Selamat Data telah ditambahkan");