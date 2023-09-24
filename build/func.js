"use strict";
// function
function add(x, y) {
    // explanation: add is a function that takes in two parameters x and y, both of type number and returns a number
    return x + y;
}
const sol = add(1, 2);
console.log(sol);
function printMessage(message) {
    // void means it doesn't return anything
    console.log(message);
}
printMessage("hello typescript");
const addFunc = (x, y) => {
    return x + y;
};
const sol2 = addFunc(2, 3);
console.log(sol);
const subFunc = (x, y) => x - y;
console.log(subFunc(2000, 300));
