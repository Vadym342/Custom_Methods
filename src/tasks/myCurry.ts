export function myCurry(fn: Function, arity = fn.length, ...args: any[]): any {
    if (arity <= args.length) {
        return fn(...args)
    } else {
        return myCurry.bind(null, fn, arity, ...args);
    }
}