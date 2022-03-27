export function myFill<T>(value: T, arr: T[]): T[] {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = value;
    }
    return arr;
}
console.log(myFill(0, [1, 2, 3, 5]));