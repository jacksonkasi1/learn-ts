// union type
let dataReceived: string | number;

dataReceived = 123;
dataReceived = "12";

// Enum type

export enum Color {
  Red = 2,
  Green,
  Blue,
}

let color: Color = Color.Green;

console.log(color);
console.log(Color);

const k: any = Color[2]; // Red

console.log(k);

// object type

let user: {
  name: string;
  age: number;
  address?: string;
  phone?: string;
  isMarried?: boolean;
} = {
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

type User = {
  name: string;
  age: number;
  address?: string;
  phone?: string;
  isMarried?: boolean;
};


let user1: User = {
  name: "John",
  age: 30,
  isMarried: false,
  phone: "123",
  address: "New York",
};

// function type

const add = (x: number, y: number): number => {
  return x + y;
};

console.log(add(1, 2));

let employee: any = "jackson kasi";
// let employeeId = <number>employee;
let employeeId = employee as number;

employeeId = 1;

// let newer = employeeId as string;

// console.log(newer);

console.log(employeeId);
