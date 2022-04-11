//! variant 1
function myFilter<T>(fn: (el: T) => Boolean, arr: T[]): T[] {
    const filtered: T[] = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i])) {
            filtered.push(arr[i]);
        }
    }
    return filtered;
}

function myIncludes<T>(el: T, arr: T[]): Boolean {
    for (let i = 0; i < arr.length; i++) {
        const res = arr[i];
        if (el === res) {
            return true;
        };
    };
    return false;
}

export function myDifference<T>(arr1: T[], arr2: T[]): T[] {
    return myFilter((x: any) => !myIncludes(x, arr2), arr1);
}

//! variant 2
export function difference<T>(arr1: T[], arr2: T[]) {
    const result: T[] = [];
    for (let i = 0; i < arr1.length; i++) {
        if (!myIncludes(arr1[i], arr2)) {
            result.push(arr1[i]);
        }
    }
    return result;
}
