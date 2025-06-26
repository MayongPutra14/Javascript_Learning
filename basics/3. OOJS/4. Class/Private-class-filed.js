// ketika kita ingin melindungi sebuah propery yang berharga, maka kita harus menggunakan private-class
// dengan menggunakan #nama_property


class Counter{
    #counter = 0 // nah ini tidak akan bisa dirubah.

    increment(){
        return this.#counter++  // nah kita bisa mnegaksesnya, tapi ingar karena kita masih berada didalam clas yang sama
    }

    decrement(){
        return this.#counter-- // ini juga sama
    }

    get(){
        return this.#counter
    }

}


const perhitungan = new Counter()
// kalo kita sudah membaut seperti ini, kemudian kita ganti menjadi seperti ini
perhitungan.counter = 5 // ini tidak akan bisa karena mengubah counter yang ada didalam class.
// perhitungan.#counter = 5 // ini tidak akan bisa karena mengubah counter yang ada didalam class.
perhitungan.decrement()
perhitungan.decrement()
perhitungan.decrement()
perhitungan.decrement()
perhitungan.decrement()

console.log(perhitungan.get()); 



console.log(perhitungan);