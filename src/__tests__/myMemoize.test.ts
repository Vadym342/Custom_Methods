import type * as Func from '../tasks/myMemoize';
const { myMemoize } = jest.requireActual<typeof Func>('../tasks/myMemoize');

describe('test myMemoize function', () => {
    const func = jest.fn(value => Math.pow(value, 3));
    const memoizedFunc = myMemoize(func);

    it('should return memoized results', () => {
        expect(memoizedFunc(3)).toEqual(27);
        expect(memoizedFunc(4)).toEqual(64);
        expect(memoizedFunc(3)).toEqual(27);
        expect(memoizedFunc(5)).toEqual(125);
        
        expect(func).toHaveBeenCalled();
        expect(func).toHaveBeenCalledWith(4);
        expect(func).toHaveBeenLastCalledWith(5);
        expect(func).toHaveBeenCalledTimes(3);
    });
});

export { };