const prompt = require('prompt-sync')();




console.log("=====================================================");
console.log("=============== Program Konversi Suhu ===============");
console.log("=====================================================");
console.log("# [1] Celcius ke Suhu Lainya                        #");
console.log("# [2] Reamur ke Suhu Lainya                         #");
console.log("# [3] Fahrenheit ke Suhu Lainya                     #");
console.log("# [4] Kelvin ke Suhu Lainya                         #");
console.log("=====================================================");
pilihan = prompt("Silahkan Pilih: ")

if(pilihan == 1){
    console.log("\nAnda Memilih Konversi Celcius Ke Suhu Lainnya");
    celcius = parseInt(prompt("Masukan Nilai Celcius yang ingin di Konversi: "))

    // Konversi ke reamur
    reamur = (4/5) * celcius
    
    // Konversi ke fahrenheit
    fahrenheit = ((9/5) * celcius) +32
    
    //Konversi ke  Kelvin
    kelvin = celcius + 273

    console.log("Nilai Reamur-nya adalah: ", reamur);
    console.log("Nilai Fahrenheit-nya adalah: ", fahrenheit);
    console.log("Nilai Kelvin-nya adalah: ", kelvin);
}