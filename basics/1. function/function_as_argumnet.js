// Day 2 Function as an Argument In a function
// Sebuah funsi itu dapat dijadikan sebagai argumen fungsi lain, contohnya

function lemparDuakali(fungsi) {
    fungsi()
    fungsi()
}

function lemparSatukali() {
    const hasil = Math.floor(Math.random() * 6) + 1
    console.log(hasil);
}

// console.log(lemparSatukali());

console.log(lemparDuakali(lemparSatukali));



// use function in a return
function fungsiDidalamReturn(){
    const rand = Math.random()
    if (rand >= 0.5 + 1) {
        return function(){
            console.log("Nilainya lebih Besar dari 0.5");
        }
    }else {
        return function(){
            console.log("Nilainya lebih kecil dari 0.5");
        }
    }
}

// Mendefinisikan Sebuah Method
// sebenarnya sebuah method itu ada didalah sebuah function, contohnya adalah MATH()
// jika di ketik di console browser, maka akan muncul berbagai macam metode yang bisa di gunakan didala fucntion MATH()
// analoginya: jika kamu mau menggunakan function math(), metode apa yang akan kamu pakai, jikan random maka math.random()
// jika tan maka math.tan(), seperti itu




// this == powerfull keyword
// this inii digunakan untuk memanggil sebuah property didalam sebuah object()

const profile = {
    nama: "Gilang",
    Umur: 40,
    hobi: "Tidur",
    nikah: false,
    introduction: function(){
        return `Hallo nama saya ${this.nama}, umur saya ${this.Umur}, hobi saya ${this.hobi}, pernikahan ${this.nikah}`
    }
}




