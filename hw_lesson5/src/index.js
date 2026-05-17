import { calculate_Sum } from './functions.js';
import { sum } from './arrow-functions.js';
import { car } from './getters-setters.js';

const numbers = [1, 2, 3, 4, 5];
const strings = ['apple', 'plum', 'cherry', 'date', 'elderberry'];

console.log('---- functions:-----');
console.log(calculate_Sum(numbers));
console.log(calculate_Sum(strings));

console.log('---- arrow functions:-----');
console.log(sum(numbers));
console.log(sum(strings));

console.log('---- getters and setters:-----');
console.log(car.summary);
console.log(car.comfortFeatures);
car.comfortFeatures = ['', 'heated seats'];
console.log(car.comfortFeatures);
