const num1 = 1;
const num2 = 2;
let num3 = 3;
num3 += 4;
const division = num1 / num2;
console .log(num1, num2, division, num3);

const str1 = 'Hello';
const str2 = 'World';
console.log((str1 + ' ' + str2));
console.log((`This is the ${num1}st word "${str1}" and the ${num2}nd word "${str2}"`));

const yes = true;
const no = false;
console.log(`The sum of ${yes} and ${no} is ${(Number(yes)) + Number(no)}`);

const nullVar = null;
const myObj = [1, 2, 3];
console.log(nullVar + num1);
console.log(myObj * num2);
