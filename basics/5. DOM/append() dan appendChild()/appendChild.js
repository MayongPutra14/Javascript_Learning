// latihan AppendChild()

const playGround = document.getElementById("playground");

const infoBox = document.createElement("div");
infoBox.textContent = "Bagian ini ditambahkan dengan menggunakan appendChild()"
infoBox.style.border = "2px solid";
infoBox.style.borderColor = "red";
infoBox.style.width = '50%'
infoBox.style.padding = "2rem";
infoBox.style.margin = "auto";

playGround.appendChild(infoBox);
