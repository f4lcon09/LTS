let greetings: string = "Hello Vinicios";

greetings = greetings.toLowerCase()
console.log(greetings);

// number 

let userId: number = 334455.45
userId.toFixed()

// boolean

let isLoggedIn: boolean = false

// any; é uma má pratica com excessão de converter JS para TS aos poucos, sempre defina o tipo da variavel

let hero: string;

function getHero(){
    return "thor"
}

hero = getHero()

//function

function addTwo(num: number): number{
     return num + 2
    //return "hello"
}

addTwo(5)

function getUpper(val: string){
    return val.toUpperCase
}

getUpper("four")

function singUpUser(name: string, email: string, isPaid: boolean){

}

singUpUser("Vinicios", "vinicios.c@gmail.com", false)

let loginUser = (name: string, email: string, isPaid: boolean = false) => {}

loginUser("v", "v@v.com")

// Situacao onde é necessario declarar multiplos tipos de variaveis 
// function getValue(myVal: number){
//     if (myVal > 5){
//         return true
//     }
//     return "200 OK"
// }

const getHello = (s: string):string => {
    return ""
}

const heros = ["thor", "spiderman", "ironman"] 
//const heros = [1, 2, 3] 

heros.map((hero): string =>{
    return `hero is${hero}`
})

function consoleError(errmsg: string): void{
    console.log(errmsg);

}

function handleError(errmsg: string): never{
    throw new Error(errmsg);

}



export{}; // remove o erro temporariamente