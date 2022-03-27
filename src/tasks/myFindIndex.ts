export function myFindIndex<T>(arr: T[], fn: (el: T) => Boolean): number {
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i])) return i;
    }
    return -1;
};

console.log(myFindIndex([4, 6, 8, 12], (x) => x > 8));