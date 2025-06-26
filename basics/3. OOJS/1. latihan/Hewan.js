function Hewan(nama, jenis) {
  this.nama = nama;
  this.jenis = jenis;
}

function Kucing(nama, jenis, warnaBulu) {
    this.warnaBulu = warnaBulu;
    Hewan.call(this, nama, jenis);
}


Kucing.prototype = Object.create(Hewan.prototype)
Kucing.prototype.constructor = Kucing;
console.log(Kucing);


Hewan.prototype.Makan = function(){
    console.log(`${this.nama}, sedang makan!`);
}

Kucing.prototype.meong = function(){
    console.log(`${this.nama} Berkata meong!!`);
}


const Anjing = new Hewan("Jack", "Anjing")
const kitty = new Kucing("Kimi", "Percia", "Abu-abu");
kitty.Makan()
Anjing.Makan()
kitty.meong()

console.log(kitty);
console.log(Hewan);

