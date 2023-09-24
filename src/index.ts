
// union type
let dataReceived:string | number

dataReceived = 123 
dataReceived = "12"


// Enum type

export enum Color{
    Red = 2,
    Green,
    Blue
}

let color:Color = Color.Green

console.log(color)
console.log(Color)

const k:any = Color[2] // Red

console.log(k);
