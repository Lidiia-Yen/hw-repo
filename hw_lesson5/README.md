# JavaScript Lesson 5: Functions, Arrow Functions, Getters, and Setters

## Functions
Functions are reusable blocks of code that perform a specific task. They can accept parameters and return values.

### Function Declaration
```javascript
function calculate_Sum(some_array) {
    let sum = 0;
    for (let i = 0; i < some_array.length; i++) {
        sum += some_array[i];
    }
    return sum;
}
```

### Function Expression
```javascript
const add = function(a, b) {
    return a + b;
};

console.log(add(5, 3)); // Output: 8
```

## Arrow Functions
Arrow functions provide a concise syntax for writing functions. They use the `=>` (fat arrow) notation and are always anonymous.

### Basic Syntax
```javascript
const functionName = (parameters) => {
    // function body
    return value;
};
```

### Examples
```javascript
// Single parameter (parentheses optional)
const square = x => x * x;
console.log(square(4)); // Output: 16

// Multiple parameters
const multiply = (a, b) => a * b;
console.log(multiply(3, 5)); // Output: 15

// No parameters
const greet = () => "Hello, World!";
console.log(greet()); // Output: Hello, World!

// Implicit return (one-liner)
const isEven = num => num % 2 === 0;

// Explicit return (multi-line)
const getDetails = (name, age) => {
    const message = `Name: ${name}, Age: ${age}`;
    return message;
};
```

### Key Differences from Regular Functions
- Arrow functions do not have their own `this` context
- Arrow functions cannot be used as constructors
- Arrow functions do not have the `arguments` object

## Getters and Setters
Getters and setters allow you to define custom behavior when reading or writing object properties.

### Getters
A getter is a method that gets (retrieves) the value of a property.

```javascript
const person = {
    firstName: 'John',
    lastName: 'Doe',
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
};

console.log(person.fullName); // Output: John Doe
```

### Setters
A setter is a method that sets (assigns) the value of a property.

```javascript
const person = {
    firstName: 'John',
    lastName: 'Doe',
    set fullName(name) {
        const parts = name.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

person.fullName = 'Jane Smith';
console.log(person.firstName);  // Output: Jane
console.log(person.lastName);   // Output: Smith
```

### Getters and Setters in Classes
```javascript
class Circle {
    constructor(radius) {
        this._radius = radius;
    }

    get radius() {
        return this._radius;
    }

    set radius(value) {
        if (value <= 0) {
            console.log('Radius must be positive');
            return;
        }
        this._radius = value;
    }

    get area() {
        return Math.PI * this._radius ** 2;
    }
}

const circle = new Circle(5);
console.log(circle.radius);    // Output: 5
console.log(circle.area);      // Output: 78.53981633974483
circle.radius = 10;
console.log(circle.area);      // Output: 314.1592653589793
circle.radius = -5;            // Output: Radius must be positive
```

## Examples and Use Cases

### Calculate Sum Function
The `calculate_Sum()` function demonstrates a basic function that iterates through an array and returns the sum:

```javascript
const numbers = [1, 2, 3, 4, 5];
const strings = ['apple', 'plum', 'cherry', 'date', 'elderberry'];

console.log(calculate_Sum(numbers));   // Output: 15
console.log(calculate_Sum(strings));   // Output: appleplu mcherry...
```

### Arrow Function Examples
```javascript
// Using arrow function instead of regular function
const calculateSum = (arr) => {
    return arr.reduce((sum, num) => sum + num, 0);
};

console.log(calculateSum([1, 2, 3, 4, 5])); // Output: 15
```

## Best Practices
- Use arrow functions for callbacks and simple operations
- Use regular functions for constructors and methods requiring `this`
- Use getters for computed properties that should be read-only
- Use setters to validate or transform data before assignment
- Use descriptive function names that reflect their purpose
- Keep functions focused on a single responsibility