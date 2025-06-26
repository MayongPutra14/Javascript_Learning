// untuk menangani sebuah jenis error didalm javascript kita bisa mneggunakan katakunci throw error

class MathStaticMethod {
  static addition(...numbers) {
    if (numbers.length === 0) {
      throw new Error("Numbers harus lebih dari 0");
    }

    let total = 0;
    for (const element of numbers) {
      total += element;
    }
    return total;
  }
}

console.log(MathStaticMethod.addition()); 

const add = MathStaticMethod.addition(1, 1, 1, 1, 1);
console.log(add);
