// Scope merupakan ruang lingkup yang antara global dan lokal
// sebuah variabel global dapat digunakan didalam sebuah function, tapi sebuah varibel lokal
// yang terletak di dalam sebuah function maka tidak akan bisa diakses di luar function itu

// Contoh variabel global dan lokal

// part 1
let programing = "Javascript" // ini variabel global

function typeSafe() {
    let programing = "C++" // this is variabel local, this variabel only active in this function
    // if we want to define variabel in a function, it's oke, but we have to use "var" instead of let and const
    // but var is deprecated, unrecomend. 
}

console.log(programing);


// part 2
function typeSafe() {
    let programing = "C++" // this is variabel local, this variabel only active in this function
    console.log(programing);
}
// ini this case we need to call the function so that the programing can appear in console
typeSafe()//C++



// part 3
function typeSafe() {
     programing = "C++" // this is variabel local, this variabel only active in this function
    // console.log(programing);
}

// ini this case, even we change the value of programing in the function
// then we call it, the result is javascript, but if we use console.log in the function, then
// we turn of the other one, and call the function the result will C++
console.log(programing);




// Lexical Scope
// if you create a function in a function, the last function can accsess the first function.
// example

function outter() {
    let position = "Variabel Outter"
    

    function inner() {
        let koordinat = "variabel inner"
        console.log(koordinat) // we have to call the function
    }

    inner()

    console.log(position)
}

outter()

// if we want to call the inner() function weh have to call outer() function.
// Analogy:
// call outter = outer()
// outer is running, and show the posisiton, and  call the inner() function, the teh inner() function show koordinat. 
// that is.

// but we have to keep in mind, a variabel in inner function can't accessed in outter, but variabel in outter can accessed in inner.





