// function hello() {
//   return "Ini function biasa";
// }

// console.log(hello());

// const helloAsync = async (nama) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (nama == "") {
//         reject(`Kamu gagal memanggil aku ${nama}`);
//     } else {
//         resolve(`Kamu berhasil memanggil aku ${nama}`);
//     }
//     }, 2000);
    
//   });
// };

// helloAsync("")
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// helloAsync("Gilang")
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });


// Login 
const login = async (id, password) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(id === "Gilang" && password === 123){
                resolve(`Anda berhasil Login`)
            }else{
                reject("Anda Gagal Login")
            }
        }, 2000);

        
    })
}


login("Gilang", 123).then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});


login("", 123).then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});