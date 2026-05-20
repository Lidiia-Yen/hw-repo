# JavaScript lesson 6: Asynchronous Programming

## Promises (`promises.js`)

A Promise is an object representing the eventual completion (or failure) of an asynchronous operation.

```javascript
fetch('https://api.github.com/users/hadley/orgs')
    .then(response => response.json())
    .then(progs => console.log(progs))
    .catch(error => console.error('Error:', error));
```

**Key concepts:**
- `.then()` — handles the resolved value
- `.catch()` — handles errors
- **Chain multiple `.then()` calls** to process data step-by-step
- Promise states: **pending** → **fulfilled** or **rejected**

## Async/Await (`async-await.js`)

Async/await is syntactic sugar for Promises, making asynchronous code look synchronous.

```javascript
async function getOrgById() {
    const response = await fetch('https://api.github.com/users/hadley/orgs');
    const progs = await response.json();
    return progs;
}

;(async () => {
    const data = await getOrgById();
    console.log(data);
})();
```

**Key concepts:**
- `async function` — declares an asynchronous function that always returns a Promise
- `await` — pauses execution until a Promise resolves
- `await` can only be used inside `async` functions or top-level module code
- **IIFE pattern** — `(async () => { ... })()` — wraps code in an immediately-invoked async function

## Try-Catch Error Handling (`try-catch.js`)

Try-catch blocks handle errors in synchronous and asynchronous code.

```javascript
async function fetchResources(resource_1, resource_2) {
    try {
        const attempt_1 = await fetchDataWithTryCatch(resource_1);
        return { attempt_1 };
    } catch (error) {
        console.warn('Attempt 1 failed, trying attempt 2:', error.message);
        const attempt_2 = await fetchDataWithTryCatch(resource_2);
        return { attempt_2 };
    }
}
```

**Key concepts:**
- `try` block — contains code that might throw an error
- `catch` block — executes if an error is thrown
- **Fallback strategy** — catch errors and retry with an alternative resource
- **Custom errors** — throw new errors for specific failure conditions

## Running the examples

```bash
node src/promises.js
node src/async-await.js
node src/try-catch.js
```

## Summary

| Method | Style | Best For |
|--------|-------|----------|
| **Promises** | `.then().catch()` | Sequential or multiple parallel operations |
| **Async/Await** | `await` | Readable synchronous-looking code |
| **Try-Catch** | Error handling | Graceful fallback and error recovery |