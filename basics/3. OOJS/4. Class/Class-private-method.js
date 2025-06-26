// Clas rpivate method sama dengan private yang lainnya, hanya bisa di akses dari dalam Class itu sendiri

class Order{
    callOut(name){
        if(typeof name == 'number'){
            this.#callOutNumber(name)
        }else{
            this.#callOutName(name)
        }
    }

    #callOutNumber(number){
         console.log(`Pangilan Nomor urut ${number}`);
    }

    #callOutName(name){
            console.log(`Panggilan dengan nama ${name}`);
    }

}

const order = new Order()
order.callOut(1)
order.callOut("GIlang")