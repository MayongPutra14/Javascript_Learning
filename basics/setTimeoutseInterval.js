// latihan 1
setTimeout(() => {
    console.log("Ini aku!! maaf telat 2 detik");
}, 2000);

console.log("Mana si?");


const id = setInterval(() => {
    console.log("Aku Benci Kamu!!");
}, 3000);


// latihan 2 menggabungkan 

const interval = setInterval(() => {
    console.log("Aku akan terus muncul!!! selamat 2 detik");
}, 1000);

setTimeout(() => {
    clearInterval(interval)
}, 5000);
