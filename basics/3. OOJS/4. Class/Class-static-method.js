// static method sama dengan static field


class MathStaticMethod{

   static  addition(...numbers){
       let total = 0
        for (const element of numbers) {
            total += element
        }
        return total
    }

}

const add = MathStaticMethod.addition(1,1,1,1,1)
console.log(add);