class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age
    }
    sayHi(msg: string): void {
        console.log(`I am ${this.name}, ${msg}`)
    }
}

const jack = new Person('Jack', 18);

console.log(jack);


jack.sayHi('hello')