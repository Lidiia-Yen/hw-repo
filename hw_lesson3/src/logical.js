const num1 = 3;
const num2 = 5;
console.log(num1 > num2);
console.log(num1 < num2);

const str1 = 'one';
const str2 = 'two';
const str3 = '3';
console.log(str1 > str2);
console.log(str1 == str2);

console.log(num1 == str3);
console.log(num1 === str3);
console.log(num1 !== str3);

const boolT = true;
const boolF = false;
console.log(boolT && boolF); // true AND false =false
console.log(boolT || boolF); // true OR false = true
console.log(!boolT);
console.log(!boolF);

const age1 = null;
const age2 = undefined;
const myAge = age1 ?? age2 ?? 29;
console.log(myAge);
