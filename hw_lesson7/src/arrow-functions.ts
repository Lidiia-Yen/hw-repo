export const sum = (some_array: number[] | string[]): number | string =>
    typeof some_array[0] === 'number'
        ? (some_array as number[]).reduce((acc, num) => acc + num, 0)
        : some_array.join('');
