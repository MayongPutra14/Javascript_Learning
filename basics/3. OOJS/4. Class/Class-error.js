// disarankan kepada kita unutk membaut class error manual, karena kita tidak bisa men-samaratakan error yang  terjadi pada kode kita
// untuk membaut class error sebaiknya kita memberikan nama yang sesuai dengan eror yang kita hadapi.
// dalam hal ini kit aakan memmbuat error validation.

class validationError extends Error {
  constructor(message, field) {
    super(message);
    this.field = field;
  }
}

class MathStaticMethod {
  static addition(...numbers) {
    if (numbers.length === 0) {
      throw new validationError("Numbers harus lebih dari 0", "Number");
    }

    let total = 0;
    for (const element of numbers) {
      total += element;
    }
    return total;
  }
}

try {
  console.log(MathStaticMethod.addition());
  console.log("Kode sedang dicoba");
} catch (error) {
  if (error instanceof validationError) {
    console.log(
      `Error yang terjadi error di field: ${error.field} dengan error ${error.message}`
    );
  } else {
    console.log(`Terjadi error: ${error.message}`);
  }
} finally {
  console.log("Program telah dijalankan");
}

// const add = MathStaticMethod.addition(1, 1, 1, 1, 1);
// console.log(add);
