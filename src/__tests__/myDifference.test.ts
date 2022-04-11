import type * as Func from '../tasks/myDifference';
const { myDifference, difference } = jest.requireActual<typeof Func>('../tasks/myDifference');

describe('test myDifference function', () => {
    const testArr1 = [1, 2, 3, 4];
    const testArr2 = [1, 2];
    it('should return difference between 2 arrays', () => {
        expect(myDifference(testArr1,testArr2)).toStrictEqual([3,4]);
        expect(difference(testArr1,testArr2)).toStrictEqual([3,4]);
    });
});

export {};