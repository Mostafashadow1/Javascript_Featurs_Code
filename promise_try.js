// A function that might throw an error or return a Promise
function getUserData(userId) {
  if (userId === 1) {
    // Asynchronous operation (like an API call)
    return Promise.resolve({ id: 1, name: "Mahmoud" });
  } else if (userId === 2) {
    // Synchronous operation with a potential error
    throw new Error("User ID 2 is invalid!");
  } else {
    // Asynchronous operation with a rejected Promise
    return Promise.reject(new Error("User not found!"));
  }
}

// Before: Handling all cases with complex nested logic
function processUserBefore(userId) {
  new Promise((resolve, reject) => {
    try {
      resolve(getUserData(userId));
    } catch (e) {
      reject(e);
    }
  })
    .then((data) => console.log("Before: Data loaded:", data))
    .catch((err) => console.error("Before: Error:", err.message));
}

// After: Using Promise.try for a cleaner and more unified approach
function processUserAfter(userId) {
  Promise.try(() => getUserData(userId))
    .then((data) => console.log("After: Data loaded:", data))
    .catch((err) => console.error("After: Error:", err.message));
}

console.log("--- Processing User 1 (Async) ---");
processUserAfter(1); // Output: After: Data loaded: { id: 1, name: "Mahmoud" }

console.log("\n--- Processing User 2 (Sync Error) ---");
processUserAfter(2); // Output: After: Error: User ID 2 is invalid!

console.log("\n--- Processing User 3 (Async Error) ---");
processUserAfter(3); // Output: After: Error: User not found!
