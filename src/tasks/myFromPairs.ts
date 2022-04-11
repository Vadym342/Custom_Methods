export function myFromPair<T>(arr: any[]): {} {
    const obj = {};
    for (const pair of arr) {
        const key: string | number = pair[0];
        const value: T = pair[1];
        if (typeof key !== 'string' && typeof key !== 'number') {
            throw new Error('incorrect key type');
        }
        Object.defineProperty(obj, key, {
            configurable: true,
            enumerable: true,
            writable: true,
            value: value,
        });
    }
    return obj;
}
