import type * as Func from '../tasks/myFill';
const { myFill } = jest.requireActual<typeof Func>('../tasks/myFill');
describe('test myFill function', () => {
    const testArr = [1, 2, 3, 5];
    const testArr1 = ['f','f'];
    it('should return filled array', () => {
        expect(myFill(0, testArr)).toStrictEqual([0, 0, 0, 0]);
        expect(myFill('a',testArr1)).toStrictEqual(['a','a']);
    });
});

export { };