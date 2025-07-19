// let counter = 0
// while(counter < 10){

// console.log(counter);
// counter++
// }

// setInterval(() => {
//     setTimeout(function () {
//   document.body.style.background = "red";
//   setTimeout(function () {
//     document.body.style.background = "yellow";
//     setTimeout(function () {
//       document.body.style.background = "green";
//       setTimeout(function () {
//         document.body.style.background = "blue";
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);
// }, 1000);


console.log("Bangun tidur");

setTimeout(function() {
  console.log("Sikat gigi...");

  setTimeout(function() {
    console.log("Pakai baju...");

    setTimeout(function() {
      console.log("Sarapan...");

      setTimeout(function() {
        console.log("Berangkat sekolah!");
      }, 1000);

    }, 1000);

  }, 1000);

}, 1000);
