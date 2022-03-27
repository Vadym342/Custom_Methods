export function myCompact<T>(arr: T[]): T[] {
    const resArray: T[] = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            resArray.push(arr[i]);
        }
    }
    return resArray;
}
console.log(myCompact([0, 1, false, null, undefined,
    2, "", 3, "a", Number("e") * 23, NaN, "s", 34]));