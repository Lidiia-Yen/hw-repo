# Lesson3 JavaScript Coding Standards

## Overview
This repository uses ESLint to enforce consistent JavaScript style and best practices across the project.
The ESLint configuration is defined in `eslint.config.mjs` and includes recommended rules plus stylistic rules from `@stylistic/eslint-plugin` and `eslint-plugin-unicorn`.

## ESLint style rules
The key coding standards for this project are:

- `semi: ['error', 'always']` — always use semicolons.
- `indent: ['error', 4, { SwitchCase: 1 }]` — use 4 spaces for indentation and indent `case` clauses by 1 level inside `switch`.
- `max-len: ['warn', { code: 140, ignoreUrls: true, ignoreStrings: true, ignoreTemplateLiterals: true }]` — warn on long lines when they exceed 140 characters.
- `brace-style: ['warn']` — keep braces consistent for blocks.
- `comma-dangle: ['error', 'never']` — do not use trailing commas.
- `no-multiple-empty-lines: ['error', { max: 2 }]` — limit blank lines to improve readability.
- `no-trailing-spaces: ['error']` — no spaces at the end of a line.
- `eol-last: ['error', 'always']` — end files with a newline.
- `no-var: ['error']` — use `let` and `const` instead of `var`.
- `prefer-const: 'error'` — prefer `const` for variables that never change.
- `one-var-declaration-per-line: ['error', 'initializations']` — declare one variable per line when initializing.
- `keyword-spacing: ['error', { before: true, after: true }]` — require spaces around keywords.
- `@stylistic/quotes: ['warn', 'single']` — prefer single quotes for strings.
- `@stylistic/space-before-blocks: ['error', 'always']` — require a space before block statements.
- `@stylistic/arrow-spacing: 'error'` — enforce spacing around arrow function arrows.
- `@stylistic/space-infix-ops: 'error'` — require spaces around infix operators.
- `unicorn/filename-case: ['error', { case: 'kebabCase' }]` — use kebab-case for file names.

## JavaScript types
JavaScript has several basic types. Use them consistently and clearly.

### Primitive types
- `string` — text, written with quotes: `'hello'` or `"hello"`.
- `number` — numeric values: `42`, `3.14`.
- `boolean` — `true` or `false`.
- `undefined` — a variable declared without a value.
- `null` — intentional absence of any object value.
- `symbol` — unique identifiers.
- `bigint` — large integers: `123n`.

### Reference types
- `object` — key/value pairs.
- `array` — ordered collections.
- `function` — callable code blocks.

## `if...else` statements
Use `if...else` for conditional logic.

Example:

```js
const value = 10;

if (value > 10) {
    console.log('Greater than 10');
} else if (value === 10) {
    console.log('Equal to 10');
} else {
    console.log('Less than 10');
}
```

### Best practices
- Always use braces `{}` for blocks.
- Keep conditions simple and readable.
- Prefer `===` and `!==` instead of `==` and `!=`.
- Use `else if` when multiple branches are required.

### Ternary operator
Use the ternary operator for short conditional assignments:

```js
const result = value > 10 ? 'greater' : 'not greater';
```

## `switch` statements
Use `switch` for multiple discrete cases.

Example:

```js
const action = 'start';

switch (action) {
    case 'start':
        console.log('Starting');
        break;
    case 'stop':
        console.log('Stopping');
        break;
    default:
        console.log('Unknown action');
}
```

### Switch best practices
- Indent `case` clauses by one level inside `switch`.
- Always include `break` unless intentional fallthrough is required.
- Use `default` to handle unexpected values.
- Keep each `case` small and readable.

## File naming and general style
- Use `kebab-case` for JavaScript filenames, e.g. `logical.js`, `switch.js`.
- Keep line length under `140` characters when possible.
- Prefer `const` for values that do not change.
- Keep code clear and consistent across the repository.

## Running ESLint
To check files with ESLint, run the command configured for this project. If a script is available in `package.json`, use it, otherwise use:

```bash
npx eslint .
```

This README describes the project coding style and control flow best practices for `if...else` and `switch` usage.
