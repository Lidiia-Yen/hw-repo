# Stubs and Mocks in Unit Testing

## Core Concepts

### What is a Test Double?

A **test double** is any object that replaces a real dependency in a test.
The two most common types are **stubs** and **mocks**.

| | Stub | Mock |
|---|---|---|
| **Purpose** | Provide fake data | Verify behavior |
| **Focus** | State | Interactions |
| **Assertion** | On the result | On the call itself |
| **Framework** | Sinon (Mocha) | `vi.fn()` (Vitest) |

---

## Stubs — Mocha + Sinon

A **stub** replaces a function and controls what it returns.
It answers the question: _"what does the code do with the result?"_

### Installation

```bash
npm install --save-dev mocha sinon ts-sinon @types/sinon
```

### Creating a Stub

```typescript
import { stubConstructor } from 'ts-sinon';
import { DbService } from './db-service';

const mockedDbConnection = stubConstructor(DbService);
```

`stubConstructor` creates a stub of the entire class — every method becomes a stub automatically.

### Controlling Return Values

```typescript
// Synchronous method
mockedDbConnection.find.returns(expectedUser);

// Async method (returns Promise)
mockedDbConnection.find.resolves(expectedUser);

// Simulate error
mockedDbConnection.find.rejects(new Error('DB connection failed'));
```

### Full Example

```typescript
import { expect } from 'chai';
import { stubConstructor } from 'ts-sinon';
import { UserService } from './user-service';
import { DbService } from './db-service';
import { User } from './user';

describe('UserService isolated tests', () => {

    let userService: UserService;
    const mockedDbConnection = stubConstructor(DbService);

    beforeEach(() => {
        userService = new UserService(mockedDbConnection);
    });

    it('should find user by id', async () => {
        // arrange
        const expectedOutput: User = {
            id: 1,
            name: 'John Doe',
            age: 30
        };
        mockedDbConnection.find.resolves(expectedOutput);

        // act
        const user = await userService.find(1);

        // assert
        expect(user).to.deep.equal(expectedOutput);
    });
});
```

### Sinon Stub Methods

| Method | Description |
|---|---|
| `.returns(value)` | Returns a synchronous value |
| `.resolves(value)` | Returns `Promise.resolve(value)` |
| `.rejects(error)` | Returns `Promise.reject(error)` |
| `.throws(error)` | Throws an error synchronously |
| `.callsFake(fn)` | Calls a custom function |
| `.onCall(n).returns(v)` | Returns value only on nth call |

---

## Mocks — Vitest

A **mock** in Vitest replaces a function and also tracks how it was called.
It answers: _"was this function called, with what arguments, how many times?"_

### Installation

```bash
npm install --save-dev vitest
```

### Creating a Mock

```typescript
import { vi } from 'vitest';

const mockedMethod = vi.fn();
```

### Controlling Return Values

```typescript
// Synchronous
vi.fn().mockReturnValue('result');

// Async
vi.fn().mockResolvedValue({ id: 1 });

// Simulate error
vi.fn().mockRejectedValue(new Error('failed'));

// Different value on each call
vi.fn()
    .mockReturnValueOnce('first call')
    .mockReturnValueOnce('second call');
```

### Full Example

```typescript
import { vi, describe, it, expect, beforeEach } from 'vitest';
import { ShepherdDog } from './shepherd-dog';

describe('ShepherdDog isolated tests', () => {

    let shepherdDog: ShepherdDog;

    beforeEach(() => {
        shepherdDog = {
            interactWithPet: vi.fn().mockReturnValue('Rex has eaten, slept, run and sat down.'),
            search: vi.fn(),
            guardHouse: vi.fn(),
            herdSheep: vi.fn(),
            trackSmell: vi.fn(),
            eat: vi.fn(),
            sleep: vi.fn(),
            run: vi.fn(),
            sit: vi.fn(),
        } as unknown as ShepherdDog;
    });

    it('should interact with pet and return description', () => {
        // arrange
        const expectedOutput = 'Rex has eaten, slept, run and sat down.';

        // act
        const result = shepherdDog.interactWithPet();

        // assert
        expect(result).toBe(expectedOutput);
    });

    it('should call interactWithPet once', () => {
        // act
        shepherdDog.interactWithPet();

        // assert
        expect(shepherdDog.interactWithPet).toHaveBeenCalledOnce();
    });

    it('should call interactWithPet with correct argument', () => {
        // act
        shepherdDog.interactWithPet('fetch');

        // assert
        expect(shepherdDog.interactWithPet).toHaveBeenCalledWith('fetch');
    });
});
```

### Vitest Mock Assertions

| Assertion | Description |
|---|---|
| `toHaveBeenCalled()` | Was called at least once |
| `toHaveBeenCalledOnce()` | Was called exactly once |
| `toHaveBeenCalledTimes(n)` | Was called exactly n times |
| `toHaveBeenCalledWith(...args)` | Was called with specific arguments |
| `toHaveBeenLastCalledWith(...args)` | Last call used these arguments |
| `toHaveReturnedWith(value)` | Returned a specific value |

---

## Stub vs Mock — When to Use

```
┌─────────────────────────────────────────────────────────┐
│  "I only care about the RESULT of the function"         │
│  → Use STUB (.returns / .resolves)                      │
│                                                         │
│  "I care about WHETHER and HOW the function was called" │
│  → Use MOCK (vi.fn() + toHaveBeenCalledWith)            │
└─────────────────────────────────────────────────────────┘
```

### Example: Same scenario, different focus

```typescript
// STUB — testing that userService correctly uses the DB result
mockedDbConnection.find.resolves({ id: 1, name: 'John' });
const user = await userService.find(1);
expect(user.name).to.equal('John');               // assert on result

// MOCK — testing that userService actually calls the DB
const user = await userService.find(1);
expect(mockedDbConnection.find).toHaveBeenCalledWith(1);  // assert on interaction
```

---

## AAA Pattern (Arrange — Act — Assert)

Every test should follow this structure:

```typescript
it('should find user by id', async () => {

    // ARRANGE — set up data and stubs/mocks
    const expectedOutput = { id: 1, name: 'John Doe', age: 30 };
    mockedDbConnection.find.resolves(expectedOutput);

    // ACT — call the method under test (one call only)
    const user = await userService.find(1);

    // ASSERT — verify the outcome
    expect(user).to.deep.equal(expectedOutput);
});
```

> The **act** block should contain exactly **one call** — if there are two, it's unclear which one caused a failure.

---

## `.equal` vs `.deep.equal` (Chai)

```typescript
// .equal — compares by reference (like ===)
expect({ id: 1 }).to.equal({ id: 1 });       // ❌ FAIL — different objects in memory

// .deep.equal — compares by structure recursively
expect({ id: 1 }).to.deep.equal({ id: 1 });  // ✅ PASS — same shape and values
```

Use `.deep.equal` when comparing objects or arrays.
Use `.equal` for primitives (`string`, `number`, `boolean`).
