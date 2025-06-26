// Kata super() didalm javascript tidak hanya untuk memanggil CF nya saja, melaikan bisa memanggil prtorype(method/funngsi) yang ada di dalam
// Parent kemudian kita bias menaggil nya dengan cara super.nama_methodnya.
// perlu dicatat: jika terdapat banyak  method di parent, kita bisa memanggil yang mana aja, yang penting kita harus mengunakan kata kunci "super" 

// Super Method

class Guru{
    constructor(nama){
        this.nama = nama
    }
    sapa(){
        console.log(`Halo nama saya adalah ${this.nama} saya telah menjadi seorang guru`);
    }
}




class Siswa extends Guru{
    
    constructor(nama){
        super(nama)
    }
    sapa(nama){
        super.sapa()
        console.log(`Halo nama saya adalah ${nama} saya adalah siswa`);
    }
}

const siswa = new Siswa("Gilang")
siswa.sapa("Gilang")
