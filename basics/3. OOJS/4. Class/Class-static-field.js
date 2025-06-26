// Static  merupakan keyword yang digunakan untuk mengubah property yang ada di dalam sebuah class menjadi variabel global.
// kita bisa mengaksesnya dengan menggunakan namaClass.propertynya


class DaftarPustaka{
    static name = "Gilang Mayong"
    static year = 2025
    static publish = "karawang"
}

const buku = new DaftarPustaka()
console.log(buku.name); 
console.log(buku.year);  // jika mengecek lewat browser, mereka bertiga akan nempel didalam instance buku, namu jika property
console.log(buku.publish); // didalam Daftarpustaka, ditambhakan static, maka property tersebut akan hilang dari instance buku.
// dan untuk mengaksesnya, kita harus menggunakan nama classnya


DaftarPustaka.year = 2030

console.log(DaftarPustaka.name); 
console.log(DaftarPustaka.year); 
console.log( DaftarPustaka.publish); 