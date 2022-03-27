export const curry = (fn: Function, arity = fn.length, ...args: any[]): any => {
    if (arity <= args.length) {
        return fn(...args)
    } else {
        return curry.bind(null, fn, arity, ...args);
    }
}
function sum(a: number, b: number, c: number): number {
    return a + b + c;
}
const curriedSum = curry(sum);
console.log(curriedSum(1, 2, 3));
console.log(curriedSum(1)(2, 3));
console.log(curriedSum(1)(2)(3));