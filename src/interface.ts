// interface

interface User {
    name: string;
    age: number;
    address?: string;
    phone?: string;
   readonly isMarried?: boolean;
}

const user: User = {
    name: "John",
    age: 30
}

console.log(user);

