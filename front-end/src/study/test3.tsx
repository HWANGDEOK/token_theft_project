// 함수

function add(num1: number, num2:number): void {
    console.log(num1 + num2);
}


function isAdult(age: number):boolean {
    return age > 19;
}


// function hello(name?:string) {
//     return `Hello', ${name || "world"}`;
// }

function hello(name?:string, age?:number) {
    if (age != undefined) {
        return `Hello, ${name}. You are ${age}.`;
    } else {
        return `Hellom ${name}`;
    }
}


function hello2(name = "world") {
    return `Hello, ${name}`;
}

function hello3(age:number | undefined, name:string) {
    if (age != undefined) {
        return `Hello, ${name}. You are ${age}.`;
    } else {
        return `Hellom ${name}`;
    }
}

const result = hello();
const result2 = hello("sam");
// const result3 = hello(123);

console.log(hello("Sam"));
console.log(hello("Sam", 30));
console.log(hello3(30, "Sam"));
console.log(hello3(undefined, "sam"));



function add2(...nums: number[]) {
    return nums.reduce((result, num) => result + num, 0);
}

add2(1,2,3) // 6
add2(1,2,3,4,5,6,7,8,9,10) // 55



interface User2 {
    name: string;
}

const Sam: User2 = {name: "sam"}

function showname(this:User2, age:number, gender:'m'|'f') {
    console.log(this.name, age, gender);
}

const a = showname.bind(Sam);
a(30, 'm');



interface User3 {
    name: string;
    age: number;
}
function join(name: string, age: number): User3;
function join(name: string, age: string): string;
function join(name:string, age: number | string): User3 | string {
    if (typeof age === "number") {
        return{
            name,
            age,
        };
    } else {
        return "나이는 숫자로 입력하세요."
    }
}

const sam:User3 = join("Sam", 30);
const jane:string = join("jane", "30");