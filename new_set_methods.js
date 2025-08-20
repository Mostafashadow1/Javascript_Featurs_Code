const setA = new Set([1, 2, 3, 4]);
const setB = new Set([3, 4, 5, 6]);
const setC = new Set([1, 2]);

// Bad Code
function getIntersection(s1, s2) {
  const intersection = new Set();
  for (const item of s1) {
    if (s2.has(item)) {
      intersection.add(item);
    }
  }
  return intersection;
}

function getUnion(s1, s2) {
  return new Set([...s1, ...s2]);
}

function getDifferenceBefore(s1, s2) {
  const difference = new Set();
  for (const item of s1) {
    if (!s2.has(item)) {
      difference.add(item);
    }
  }
  return difference;
}

const intersectionBefore = getIntersectionBefore(setA, setB);
console.log("Before (Intersection):", [...intersectionBefore]); // Output: Before (Intersection): [3, 4]

const unionBefore = getUnionBefore(setA, setB);
console.log("Before (Union):", [...unionBefore]); // Output: Before (Union): [1, 2, 3, 4, 5, 6]

const differenceBefore = getDifferenceBefore(setA, setB);
console.log("Before (Difference A - B):", [...differenceBefore]); // Output: Before (Difference A - B): [1, 2]

// Good Code

const intersectionAfter = setA.intersection(setB);
console.log("After (Intersection):", [...intersectionAfter]); // Output: After (Intersection): [3, 4]

const unionAfter = setA.union(setB);
console.log("After (Union):", [...unionAfter]); // Output: After (Union): [1, 2, 3, 4, 5, 6]

const differenceAfter = setA.difference(setB);
console.log("After (Difference A - B):", [...differenceAfter]); // Output: After (Difference A - B): [1, 2]

const isSubset = setC.isSubsetOf(setA);
console.log("After (Is C subset of A?):", isSubset); // Output: After (Is C subset of A?): true
