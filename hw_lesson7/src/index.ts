import { calculate_Sum } from './functions';
import { sum } from './arrow-functions';


const numbers = [1, 2, 3, 4, 5];
const strings = ['apple', 'plum', 'cherry', 'date', 'elderberry'];

console.log('---- function:-----');
console.log(calculate_Sum(numbers));
console.log(calculate_Sum(strings));

console.log('---- arrow function:-----');
console.log(sum(numbers));
console.log(sum(strings));
