import type * as Func from '../tasks/myCurry';
const { myCurry } = jest.requireActual<typeof Func>('../tasks/myCurry');

function testSum(a: number, b: number, c: number): number {
    return a + b + c;
}
const curriedSum = myCurry(testSum);

describe('test myCurry function', () => {
    it('should return right sum of 3 number', () => {
        expect(curriedSum(1, 2, 3)).toBe(6);
        expect(curriedSum(1)(2, 3)).toBe(6);
        expect(curriedSum(1)(2)(3)).toBe(6);
    });
});

export { };