// Memahami static field dan Method

class User{

    static totalUser = 0
    constructor(name){
        this.name = name

        User.totalUser++
    }

    static getTotalUser(){
        return User.totalUser;
    }
}


const user1 = new User("Gilang")
const user2 = new User("Syifa")
const user3 = new User("Felicia")

console.log( User.getTotalUser());