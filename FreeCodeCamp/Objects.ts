
// const User = {
//     name: "Vinicios",
//     email: "v@v.com",
//     isActive: true
// }

// function createUser({ name, isPaid }: { name: string; isPaid: boolean }) {}

// let newUser = {name: "Vinicios", isPaid: false, email: "v@v.com"}

// createUser(newUser)

// function createCourse():{name: string, price: number}{
//     return {name: "reactjs", price: 399}
// }

type User = {
    readonly _id: string
    name: string
    email: string
    isActive: boolean
    credcardDetails?: number
}

let myUser: User = {
    _id: "12345",
    name: "v",
    email: "v@v.com",
    isActive: false
    
}

type cardNumber = {
    cardnumber: string
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}


myUser.email = "v@gmail.com"
// myUser._id = "asa"


// function createUser(user: User): User{
//     return {name: "", email:"", isActive: true}

// }
// createUser({name: "", email:"", isActive: true})



export {}