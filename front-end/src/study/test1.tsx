let age:number = 30;
let isAdult:boolean = true;
let a:number[] = [1,2,3];
let a2:Array<number> = [1,2,3];

let week1:string[] = ['mon', 'tue', 'wed'];
let week:Array<string> = ['mon', 'tue', 'wed'];


// 튜플

let b:[string, number];

b = ['z',1];
// b = [1, 'z'];

b[0].toLowerCase()
b[1].toLocaleString()


// void , never

function sayHello():void {
    console.log('hello');
}

function sayError():never {
    throw new Error();
}

function infLoop():never{
    while(true) {
        //do something
    }
}


// enum

const Os = {
    Window: 3,
    Ios: 10,
    Android: 11
}

const Os1 = {
    Window: 'win',
    Ios: 'ios',
    Android: 'and'
} as const;

console.log(Os.Ios)

type OsValue = typeof Os[keyof typeof Os];
let myOs: OsValue;
myOs = Os.Window;

console.log(myOs);


// null , undefined

let c:null = null;
let d:undefined = undefined;