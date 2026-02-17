// let user:object;

// user = {
//     name: 'xx',
//     age: 30,
// }

// console.log(user.name);

type Score = 'A'|'B'|'C'|'F';

interface User {
    name: string,
    age: number,
    gender?: string,
    readonly birthYaer: number,
    [grade:number]: Score,
}

let user:User = {
    name: 'xx',
    age: 30,
    birthYaer: 2000,
    1: 'A',
    2: 'B',


}
user.age = 10;
user.gender = 'male';
// user.birthYaer = 1990;

console.log(user.age);



interface Add {
    (num1:number, num2:number): number;
}

const add:Add = function(x, y) {
    return x + y;
}

add(10,20);


interface IsAdult {
    (age:number): boolean;
}

const a:IsAdult = (age) => {
    return age > 19;
}

a(33) // true


// implements

interface Car {
    color: string;
    wheels: number;
    start(): void;
}

class Bmw implements Car {
    color;
    wheels = 4;
    constructor(c:string) {
        this.color = c;
    }

    start() {
        console.log('go!');
    }
}

const b = new Bmw('green');
console.log(b);


// extends

interface Benz extends Car {
    door: number;
    stop(): void;
}

const benz:Benz = {
    door: 5,
    stop() {
        console.log('stop!');
    },
    color: 'black',
    wheels: 4,
    start() {
        console.log('go benz')
    }
}


interface Toy {
    name: string;
}

interface ToyCar extends Car, Toy {
    price: number;
}