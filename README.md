

# ECMAScript 2025: The Future of JavaScript

This repository provides a comprehensive overview of the new features in **ECMAScript 2025**, with practical code examples showing the "before" and "after" to highlight the improvements. These features are set to make JavaScript development more efficient, readable, and powerful.

## Features Covered

  * **`RegExp.escape`**: A built-in method to escape special characters in a string for safe use inside a regular expression. Say goodbye to manual escaping\!
  * **`Promise.try`**: A cleaner way to handle functions that might throw synchronous errors or return a promise, ensuring consistent error handling.
  * **`JSON Modules` & `Import Attributes`**: Directly import JSON files into your code as ES Modules, simplifying configuration management and improving performance.
  * **`New Set methods`**: Adds powerful new methods like `union`, `intersection`, and `difference` to the `Set` object, making set-based operations simple and declarative.
  * **`Sync Iterator helpers`**: Provides a suite of array-like helper methods (`map`, `filter`, `take`, etc.) for synchronous iterators, improving code readability and memory efficiency.
  * **`RegExp Modifiers (s, d, v)`**: Enhances regular expressions with new flags for dotAll mode, capture group indices, and improved Unicode support.
  * **`Duplicate named capture groups`**: Allows the same name to be used for multiple capture groups in a single regex, making complex patterns more readable.
  * **`Float16 on TypedArrays`**: Introduces a new data type for half-precision floating-point numbers, reducing memory usage in computationally intensive applications like graphics.



For example, see the difference for `Promise.try`:

### Before `Promise.try`

```javascript
function dangerousOperation() {
  // This could throw a synchronous error
  if (Math.random() > 0.5) {
    throw new Error("Whoops, a sync error!");
  }
  return Promise.resolve("Success!");
}

new Promise((resolve, reject) => {
  try {
    resolve(dangerousOperation());
  } catch (e) {
    reject(e);
  }
}).catch(console.error);
```

### After `Promise.try`

```javascript
function dangerousOperation() {
  // This could throw a synchronous error
  if (Math.random() > 0.5) {
    throw new Error("Whoops, a sync error!");
  }
  return Promise.resolve("Success!");
}

Promise.try(() => dangerousOperation())
  .catch(console.error);
```



-----

## Resources

  * [ECMAScript finished proposals](https://github.com/tc39/proposals/blob/HEAD/finished-proposals.md)
  * [ECMAScript 2025 on Wikipedia](https://en.wikipedia.org/wiki/ECMAScript_version_history#16th_edition_%E2%80%93_ECMAScript_2025)

## Contributing

Feel free to contribute by suggesting more examples or correcting any information.

## License

This project is licensed under the MIT License.
