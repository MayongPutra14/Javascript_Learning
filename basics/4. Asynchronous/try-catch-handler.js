function callMe(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (name.trim() == "") {
        // console.log();
        reject("Maaf Nama Tidak Ada!!");
      } else {
        console.log(`Hallo My name's ${name}`);
        resolve();
      }
    }, 2000);
  },);
}


async function tryCall() {
    try {
      await callMe("") 
    } catch (error) {
        console.log(error);
    }
}

// tryCall()  <== harus dipanggil


