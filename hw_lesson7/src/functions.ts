export function calculate_Sum (some_array: number[] | string[]): number | string {
    let sum: number | string = typeof some_array[0] === 'string' ? '' : 0 as number | string;
    for (const element of some_array) {
        sum = (sum as number) + (element as number);
    }
    return sum;
}
