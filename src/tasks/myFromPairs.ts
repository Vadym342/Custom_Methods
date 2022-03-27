export function MyFromPair<T>(arr: any[]): {} {
    const obj = {};
    for (const pair of arr) {
        const key: string | number = pair[0];
        const value: T = pair[1];
        Object.defineProperty(obj, key, {
            configurable: true,
            enumerable: true,
            writable: true,
            value: value,
        });
    }
    return obj;
}

console.log(MyFromPair(([
    ['blabla1', 'blalal1'],
    ['bla2', 232],
])));