export function myMemoize<T>(fn: Function): any {
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
