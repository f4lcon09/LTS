interface User {
    readonly dbId: number,
    email: string,
    userId: number,
    googleID?: string
    //startTrail: () => string
    startTrail(): string
    getCoupon(couponname: string, value: number): number
}

interface User{
    githubToken: string
}

interface Admin extends User {
    role: "admin" | "ta" | "learner"
}

const vinicios: Admin =  {dbId: 22,  email: "v@v.com", 
role: "admin",
userId: 2211,
githubToken: "github",
startTrail: () =>{
    return "trail started"
},
getCoupon: (name: "vinicios15", off: 15) => {
    return 15
}
}

vinicios.email = "v@vc.com"
export {}