"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Color = void 0;
// union type
let dataReceived;
dataReceived = 123;
dataReceived = "12";
// Enum type
var Color;
(function (Color) {
    Color[Color["Red"] = 2] = "Red";
    Color[Color["Green"] = 3] = "Green";
    Color[Color["Blue"] = 4] = "Blue";
})(Color || (exports.Color = Color = {}));
let color = Color.Green;
console.log(color);
console.log(Color);
const k = Color[2]; // Red
console.log(k);
// object type
let user = {
    name: "John",
    age: 30,
    isMarried: false,
    phone: "123",
    address: "New York",
};
const u = {
    name: "John",
    age: 30,
    isMarried: false,
    phone: "123",
    address: "New York",
};
let user1 = {
    name: "John",
    age: 30,
    isMarried: false,
    phone: "123",
    address: "New York",
};
// function type
const add = (x, y) => {
    return x + y;
};
console.log(add(1, 2));
let employee = "jackson kasi";
// let employeeId = <number>employee;
let employeeId = employee;
employeeId = 1;
// let newer = employeeId as string;
// console.log(newer);
console.log(employeeId);
