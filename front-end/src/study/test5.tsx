// 접근 제한자
/*
public - 자식 클래스, 클래스 인스턴스 모두 접근 가능
protected - 자식 클래스에서 접근 가능
private - 해당 클래스 내부에서만 접근 가능
*/


class Car {
    readonly name: string = "car";
    color: string;
    static wheels = 4;
    constructor(color: string, name: string) {
        this.color = color;
        this.name = name;
    }
    start() {
        console.log("start");
        console.log(this.name)
        console.log(Car.wheels);
    }
}

class Bmw extends Car {
    constructor(color: string, name:string) {
        super(color, name);
    }
    showName() {
        console.log(this.name);
    }
}

const z4 = new Bmw("black", "zzz4");
console.log(Car.wheels);
// z4.name = "zzzz4";





// 추상 class

abstract class Car2 {
    color: string;
    constructor(color: string) {
        this.color = color;
    }
    start() {
        console.log("start");
    }
    abstract doSomething():void;
}

// const car = new Car("red");

class Bmw2 extends Car2 {
    constructor(color: string) {
        super(color)
    }
    doSomething(): void {
        
    }
}

const z8 = new Bmw2("black");