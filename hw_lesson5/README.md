# JavaScript lesson 4: Arrays, Loops, and Objects

## Arrays
Arrays are ordered collections of items. Create an array: `let arr = [1, 2, 3];`. Access elements: `arr[0]`. Methods: `push()`, `pop()`, `shift()`, `unshift()`, `splice()`, `slice()`.

## Loops
- **for loop**: `for (let i = 0; i < arr.length; i++) { console.log(arr[i]); }`
- **for...of loop**: `for (let item of arr) { console.log(item); }`
- **forEach**: `arr.forEach(item => console.log(item));`
- **while loop**: `let i = 0; while (i < arr.length) { console.log(arr[i]); i++; }`

## Objects
Objects are collections of key-value pairs. Create: `let obj = { name: 'John', age: 30 };`. Access: `obj.name` or `obj['name']`. Methods: `Object.keys()`, `Object.values()`, `Object.entries()`.

## Examples
- Iterating over array with for loop.
- Using forEach on array.
- Looping through object properties with for...in.