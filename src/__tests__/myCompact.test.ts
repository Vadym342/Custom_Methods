import type * as Func from '../tasks/myCompact';
const { myCompact } = jest.requireActual<typeof Func>('../tasks/myCompact');
describe('test myCompact function', () => {
    const testArr = [0, 1, false, null, undefined,
        2, "", 3, "a", Number("e") * 23, NaN, "s", 34];

    it('should return an array after removing all the false values', () => {
        expect(myCompact(testArr)).toStrictEqual([1, 2, 3, 'a', 's', 34]);
        expect(myCompact([])).toStrictEqual([]);
    });
});

export {};