"use strict";
// class User {
//     public email: string
//     private name: string // #name funciona igual
//     readonly city: string = "camboriu"
//     constructor(email: string, name: string){
//         this.email = email;
//         this.name = name
//     }
// }
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.city = "camboriu";
    }
}
const vinicios = new User("v@v.com", "Vinicios");
// vinicios.name
