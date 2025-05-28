const prompt = require("prompt-sync")();
console.log("\n");

console.log("=====================================================");
console.log("#               Program Konversi Suhu               #");
console.log("=====================================================");
console.log("# [1] Celcius                                       #");
console.log("# [2] Reamur                                        #");
console.log("# [3] Fahrenheit                                    #");
console.log("# [4] Kelvin                                        #");
console.log("=====================================================");
input = prompt("Silahkan Pilih: ");

function convert(pilihan) {
  console.clear();
  console.log("\n==================================");
  console.log("#   Konversi Ke Satuan Lainnya   #");
  console.log("==================================");

  if (pilihan == 1) {
    const celcius = parseInt(prompt("Masukan Nilai Celcius: "));
    function celciusTo() {
        // Counting Prosess
        const reamur = (4 / 5) * celcius;
        const fahrenheit = (9 / 5) * celcius + 32;
        const kelvin = celcius + 273;

        // Print the result
        console.log("\n## Hasil Konversi ##");
        console.log(`Hasil Celcius ke Reamur adalah: ${reamur}°`);
        console.log(`Hasil Celcius ke Fahrenheit adalah: ${fahrenheit}°`);
        console.log(`Hasil Celcius ke Kelvin adalah: ${kelvin}k`);
    }
    celciusTo();

  }else if(pilihan == 2){
    const reamur = parseInt(prompt("Masukan Nilai Reamur: "));
    function reamurTo() {
        // Counting Prosess
        const celcius = (5 / 4) * reamur;
        const fahrenheit = ((9 / 4) * reamur) + 32;
        const kelvin = ((5 / 4) * reamur) + 273;

        // Print the result
        console.log("\n## Hasil Konversi ##");
        console.log(`Hasil Reamur ke Celcius adalah: ${celcius}°`);
        console.log(`Hasil Reamur ke Fahrenheit adalah: ${fahrenheit}°`);
        console.log(`Hasil Reamur ke Kelvin adalah: ${kelvin}k`);
    }
    reamurTo();

  }else if( pilihan == 3) {
    const fahrenheit = parseInt(prompt("Masukan Nilai Fahrenheit: "));
    function fahrenheitTo() {
        // Counting Prosess
        const celcius = (5 / 9) * (fahrenheit - 32);
        const reamur = (4 / 9) * (fahrenheit - 32);
        const kelvin = (5 / 9) * (fahrenheit - 32) + 273;

        // Print the result
        console.log("\n\n## Hasil Konversi ##");
        console.log(`Hasil Fahrenheit ke Celcius adalah: ${Number(celcius.toFixed(2))}°`);
        console.log(`Hasil Fahrenheit ke Reamur adalah: ${Number(reamur.toFixed(2))}°`);
        console.log(`Hasil Fahrenheit ke Kelvin adalah: ${Number(kelvin.toFixed(2))}k`);
    }
    fahrenheitTo();
  }else if (pilihan == 4) {
     const kelvin = parseInt(prompt("Masukan Nilai Kelvin: "));
    function kelvinTo() {
        // Counting Prosess
        const celcius = kelvin - 273;
        const reamur = (4 / 5) * (kelvin - 273);
        const fahrenheit = (9 / 5) * (kelvin - 273) + 32;

        // Print the result
        console.log("\n\n## Hasil Konversi ##");
        console.log(`Hasil Kelvin ke Celcius adalah: ${celcius}°`);
        console.log(`Hasil Kelvin ke Reamur adalah: ${reamur}°`);
        console.log(`Hasil Kelvin ke Fahrenheit  adalah: ${Number(fahrenheit.toFixed(2))}k`);
    }
    kelvinTo();
  }
}

convert(input);