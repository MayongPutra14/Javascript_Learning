class Person {
    constructor(name, age){
        // kita bisa menaruh apapun didalam kode ini.
        console.log("Membuat Constructor", name, age);
    }
}

// jadi kita bisa meng-analogikan ini seperti CF, namun dengan bagian terpisah, jadi class merupakan nama dari CF, nah constructor merupakan parameter.

const gilang = new Person("Gilang", 19)
console.log(gilang);