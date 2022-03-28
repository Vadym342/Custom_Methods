export function myCompact<T>(arr: T[]): T[] {
    const resArray: T[] = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            resArray.push(arr[i]);
        }
    }
    return resArray;
}
