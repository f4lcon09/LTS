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
  
    readonly city: string = "camboriu"
    constructor(public email: string, 
                public name: string,
                // private userID:  string
                ){

    }
}

const vinicios = new User("v@v.com", "Vinicios")
// vinicios.name