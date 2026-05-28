export function calculate_Sum(some_array: number[] | string[]): number | string {
    if (typeof some_array[0] === 'number') {
        return (some_array as number[]).reduce((sum, acc) => sum + acc, 0);
    }
    return some_array.join('');
}
