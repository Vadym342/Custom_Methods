export function memoize<T>(fn: Function): any {
    const cache: any = {};
    return (...args: T[]) => {
        const el: T = args[0];
        if (el in cache) {
            return cache[el];
        }
        else {
            const res = fn(el);
            cache[el] = res;
            return res;
        }
    }
}
const factorial = memoize(
    (x:number) => {
        if (x === 0) {
            return 1;
        }
        else {
            return x * factorial(x - 1);
        }
    }
);
console.log(factorial(5));
console.log(factorial(6));