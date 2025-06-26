// let toBiner = [];

// let decimal = 14;
// let pembagi = 14;
// for (let i = 1; i < pembagi; i += 1) {
//     decimal += decimal / 2;
//   if (typeof decimal== typeof(int)) {
//     toBiner.push(0);
//   } else {
//     toBiner.push(1);
//   }
// }

// toBiner.forEach((element) => {
//   console.log(element);
// });

// typeof decimal;

// console.log(typeof decimal);
// console.log(typeof pembagi);



// Konversi dari decimal ke binner
let binner = []
let decimal = 14



 while(decimal != 0){
    hasil = decimal / 2
    console.log(hasil);
  if (hasil % 2 != 0){
    binner.push("0")
  }else {
    binner.push("1")
  }
  hasil--
} 


console.log(binner);