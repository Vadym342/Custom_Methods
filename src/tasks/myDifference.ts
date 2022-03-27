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
console.log(myDifference([1, 2, 3, 4], [1, 2]));

//! variant 2
export function difference<T>(a1: T[], a2: T[]) {
    const result: T[] = [];
    for (let i = 0; i < a1.length; i++) {
        if (!myIncludes(a1[i], a2)) {
            result.push(a1[i]);
        }
    }
    return result;
}
console.log(difference([1, 2, 3, 4], [1, 2]));