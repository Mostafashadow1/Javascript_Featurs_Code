// Assume you have a file named 'config.json' with the following content:
// {
//   "appName": "Video Editor Pro",
//   "version": "1.0.0",
//   "features": ["trim", "merge", "effects"]
// }

// Before: In a CommonJS environment (Node.js)
// const config = require('./config.json');
// console.log(config.appName);

// Before: In a browser (using fetch)
// async function loadConfig() {
//     const res = await fetch('./config.json');
//     const config = await res.json();
//     console.log(config.appName);
// }
// loadConfig();

// After: Using the new syntax in an ES Module environment
import config from './config.json' with { type: 'json' };

console.log(`Application Name: ${config.appName}`); // Output: Application Name: Video Editor Pro
console.log(`Version: ${config.version}`);         // Output: Version: 1.0.0
console.log(`Features: ${config.features.join(', ')}`); // Output: Features: trim, merge, effects