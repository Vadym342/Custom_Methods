import type * as Func from '../tasks/myFromPairs';
const { myFromPair } = jest.requireActual<typeof Func>('../tasks/myFromPairs');

describe('test myFromPairs function', () => {
    const testArr = [
        ['b1', 'b2'],
        ['b2', 232],
    ];
    const testArr1 = [
        [undefined, 'b2'],
        ['b2', 232],
    ];
    const testArr2 = [
        [1, 'b2'],
        ['b2', 232],
    ];
    it('should return new object', () => {
        expect(myFromPair(testArr)).toStrictEqual({ 'b1': 'b2', b2: 232 });
    });
    it('should throw error :"incorrect key type"', () => {
        expect(() => { myFromPair(testArr1) }).toThrow('incorrect key type');
    })
    it('should return new object', () => {
        expect(myFromPair(testArr2)).toStrictEqual({ '1': 'b2', b2: 232 });
    });
});

export { };