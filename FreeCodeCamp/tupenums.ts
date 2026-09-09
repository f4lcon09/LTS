//const user: (string | number)[] = [1, "vc"]
let tUser: [string, number, boolean]

tUser = ["vc", 131, true] // precisa seguir a ordem do array do let tUser

let rgb: [number, number, number] = [255, 123, 112]

type User = [number, string]

const newUser: User = [112, "example@google.com"]

newUser[1] = "vc.com"

enum SeatChoice {
    AISLE = "aisle",
    MIDDLE = "middle",
    WINDOW = 3,
    FOURTH
}

const hcSeat = SeatChoice.AISLE

export {}