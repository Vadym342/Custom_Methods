import type * as Func from '../tasks/myFlattenDeep';
const { myFlattenDeep, MyFlattenDeep } = jest.requireActual<typeof Func>('../tasks/myFlattenDeep');
describe('test FlattenDeep function', () => {
    const testArr = [1, [2, 3], [4], [5, [6,]], [[[7]]], [[[8, 9]]]];
    it('should return flatten array', () => {
        expect(myFlattenDeep(testArr)).toStrictEqual([1,2,3,4,5,6,7,8,9]);
        expect(MyFlattenDeep(testArr)).toStrictEqual([1,2,3,4,5,6,7,8,9]);
    });
});

export { };