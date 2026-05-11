const arr_num = [1, 2, 3, 4, 5, 1];
const arr_text = ['a', 'b', 'c', 'olive', 'e', 'apple'];
const arr_bool = [true, false, true, false, true];
const arr_any = [1, undefined, 'plum', [1, 2, 3], {name: 'John'}, 'b', false];

console.log(arr_num.reduce((acc, val) => acc + val, 0)); // Sum of numbers
console.log(arr_text.sort((a, b) => b.localeCompare(a))); // Text sorted descending
console.log(arr_any.filter(val => typeof val === 'string')); // Filter strings
console.log(arr_bool.find(val => val === true)); // Find first true value
console.log(arr_any.indexOf('plum')); // Index of 'plum'
console.log(arr_num.concat([6, 7, 8]).toSorted()); // Concatenate with another array


const cars = [
    { name: 'toyota', color: 'red' },
    { name: 'bmw', color: 'red' },
    { name: 'suzuki', color: 'green' },
    { name: 'mercedes', color: 'black' }
];
const groupedCars = Object.groupBy(cars, car => car.color);
console.log(groupedCars);

const changed_arr = arr_num.map(num => num * 3); // Create a new array with numbers *3
changed_arr.forEach((val) => {
    if (val > 10) {
        console.log(val); // Log values greater than 10
    }
});
console.log(changed_arr.toSorted((a, b) => b - a)); // Log the new array with numbers multiplied by 3
