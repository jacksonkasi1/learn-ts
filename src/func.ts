// function

function add(x: number, y: number): number {
  // explanation: add is a function that takes in two parameters x and y, both of type number and returns a number
  return x + y;
}

const sol: number = add(1, 2);
console.log(sol);

function printMessage(message: string | number): void {
  // void means it doesn't return anything
  console.log(message);
}

printMessage("hello typescript");

interface mathFunc {
  (x: number, y: number): number;
}

const addFunc: mathFunc = (x: number, y: number) => {
  return x + y;
};

const sol2 = addFunc(2, 3);

console.log(sol);

const subFunc: mathFunc = (x, y) => x - y;

console.log(subFunc(2000, 300));