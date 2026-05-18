export function calculate_Sum (some_array) {
    let sum = 0;
    for (let i = 0; i < some_array.length; i++) {
        sum += some_array[i];
    }
    return sum;
}
