class BankAccount {
    #balance = 0

    deposit(jumlah){
        console.log(`ini deposit $${jumlah}`);
    }

    getBalance(){
        console.log(`ini get balance ${this.#balance}`);
    }
    

    #longTransaction(jumlah){
       return  jumlah++
    }

    getLongTransacton(){
        return this.#longTransaction
    }
}

const account1 = new BankAccount()
account1.balance = 4

console.log(account1.getLongTransacton());