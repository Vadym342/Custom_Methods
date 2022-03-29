import type * as Func from '../tasks/myFindIndex';
const { myFindIndex } = jest.requireActual<typeof Func>('../tasks/myFindIndex');
describe('test myFindIndex function', () => {
    const testArr = [4, 6, 8, 12];
    const testFn = jest.fn(x => x > 8);
    it('should return index of element', () => {
        expect(myFindIndex(testArr,testFn)).toBe(3);
    });
});

export { };