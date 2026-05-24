export const sum = (some_array: number[] | string[]): number | string =>
    some_array.reduce((acc, num) => (acc as number) + (num as number), (typeof some_array[0] === 'string' ? '' : 0) as number | string);
