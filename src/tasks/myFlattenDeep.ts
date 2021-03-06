//! variant 1
function myReduce<T, R>(
    arr: T[],
    reducer: (result: R, el: T) => R,
    initialResult: R
): R {
    let result = initialResult;
    for (const element of arr) {
        result = reducer(result, element);
    }
    return result;
}
type flattenDeep<T> = Array<flattenDeep<T> | T>;

export function myFlattenDeep<T>(input: flattenDeep<T>, arr: T[] = []): T[] {
    return myReduce(input, (array: T[], current) => {
        if (Array.isArray(current)) {
            return myFlattenDeep(current, arr);
        }
        arr.push(current);
        return arr;
    }, []);
};

//! variant 2
function flatten<T>(arr: T[][]): T[] {
    const tmpArr: T[] = [];
    return tmpArr.concat(...arr);
}

export function MyFlattenDeep<T>(input: flattenDeep<T>): T[] {
    return flatten(input.map((x) => {
        if (Array.isArray(x)) {
            return MyFlattenDeep(x)
        } else {
            return [x];
        };
    }));
};
