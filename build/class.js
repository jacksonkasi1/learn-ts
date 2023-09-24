"use strict";
// interface PersonInterface {
//   name: string;
//   age: number;
//   // gender: string;
//   sayHi(msg: string): void;
// }
// class Person implements PersonInterface {
class Person {
    //   private gender: string;
    constructor(name, age, gender = "male") {
        this.name = name;
        this.age = age;
        // this.gender = "male";
    }
    sayHi(msg) {
        console.log(`I am ${this.name}, ${msg}`);
    }
}
const jack = new Person("Jack", 18);
// console.log(jack);
// jack.age = 22;
// console.log(jack);
// jack.sayHi("hello");
class Employee extends Person {
    constructor(name, age, salary) {
        super(name, age);
        this.salary = salary;
    }
}
const emp = new Employee("Jack", 18, 100);
emp.sayHi("hello");
console.log(emp);
