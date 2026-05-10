const num1 = 1;
const num2 = 2;
const num3 = 3;

if (num1 > num2) {
    console.log(`${num1} is greater than ${num2}`);
} else if (num1 === num2) {
    console.log(`${num1} is equal to ${num2}`);
} else if (num1 + num2 === num3 && num1 < num2) {
    console.log(`${num1} + ${num2} is equal to ${num3} and ${num1} is less than ${num2}`);
} else {
    console.log(`${num1} is less than ${num2}`);
};
