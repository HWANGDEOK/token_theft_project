// Generic

function getSize<T>(arr: T[]):number {
    return arr.length;
}

const arr1 = [1,2,3];
getSize<number | string>(arr1);

const arr2 = ["a","b","c"];
getSize<string>(arr2);

const arr3 = [false, true, true];
getSize<boolean>(arr3);

const arr4 = [{},{},{name: "Tim"}];
getSize<object>(arr4);






interface Mobile<T> {
    name: string;
    price: number;
    option: T;
}

const m1:Mobile<{color:string, coupon:boolean}> = {
    name: "s21",
    price: 1000,
    option: {
        color: "red",
        coupon: false,
    },
};

const m2:Mobile<string> = {
    name: "s21",
    price: 1000,
    option: "good",
};