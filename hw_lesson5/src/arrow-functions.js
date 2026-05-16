export const sum = (some_array) => {
    let sum = 0;
    let i = 0;
    do {
        sum += some_array[i];
        i++;
    } while (i < some_array.length);
    return sum;
};
