// Instanceof digunakan ketika kita ingin mengecek apakah sebuah class merupakan keturunan dari class lain atau dia berdiri sendiri.
// instanceof berbeda dengan typeof, karena itu jika kita mengeceknya mengunakan typof akan selalu menghasilkan object
// instanceof akan selalu menghasilkan nilai boolean

class Guru {

}


class Murid extends Guru{

}

const gilang = new Murid()
const syifa = new Guru()

// console.log(typeof gilang); // ini kaan menghasilkan object
// console.log(typeof syifa); // ini kaan menghasilkan object

console.log(gilang instanceof Murid); // true
console.log(gilang instanceof Guru); // False

console.log(syifa instanceof Guru); // true
console.log(syifa instanceof Murid); // false

// perlu dicatat, ketika kita menggunakan sebuah object yang diwarisi dari object lain, maka hasinya akan berubah

console.log(gilang instanceof Murid); // true
console.log(gilang instanceof Guru); // False

console.log(syifa instanceof Guru); // true  
console.log(syifa instanceof Murid); // true ini berubah karena syifa merupakan turunan dari Guru juga