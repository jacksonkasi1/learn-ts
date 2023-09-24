// interface PersonInterface {
//   name: string;
//   age: number;
//   // gender: string;
//   sayHi(msg: string): void;
// }

// class Person implements PersonInterface {
class Person {
  //   protected name: string;
  name: string;
  protected age: number;
  //   private gender: string;

  constructor(name: string, age: number, gender: string = "male") {
    this.name = name;
    this.age = age;
    // this.gender = "male";
  }
  sayHi(msg: string): void {
    console.log(`I am ${this.name}, ${msg}`);
  }
}

const jack = new Person("Jack", 18);

// console.log(jack);
// jack.age = 22;
// console.log(jack);
// jack.sayHi("hello");

class Employee extends Person {
  salary: number;
  constructor(name: string, age: number, salary: number) {
    super(name, age);
    this.salary = salary;
  }
}

const emp = new Employee("Jack", 18, 100);

console.log(emp);
