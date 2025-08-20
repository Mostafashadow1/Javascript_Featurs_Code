const multiLineText = `Line 1
Line 2
Line 3`;

const regexDotBefore = /Line./;
console.log(
  "Before (dot without 's' flag):",
  regexDotBefore.test(multiLineText)
); // Output: Before (dot without 's' flag): true (matches 'Line 1')

const match = /Line (\d)/.exec(multiLineText);
if (match) {
  console.log(
    "Before (no 'd' flag): Full match:",
    match[0],
    "at index:",
    match.index
  ); // Output: Before (no 'd' flag): Full match: Line 1 at index: 0
  // لو عايزين نعرف index لـ ((\d))، لازم نعمل حسابات يدوية (match.index + 'Line '.length)
}

// Modern Code use's' flag (dotAll)
const regexDotAfter = /Line./s; // الـ '.' هتطابق الـ newline كمان
console.log("After ('s' flag):", regexDotAfter.test(multiLineText)); // Output: After ('s' flag): true (matches 'Line 1' and 'Line 2' and 'Line 3')

const multiLineContent = `Start:
This is some text.
End.`;
const regexDotAll = /Start:(.*)End./s; // الـ (.*) هتطابق كل حاجة بما فيها الـ newlines
const matchDotAll = regexDotAll.exec(multiLineContent);
console.log("After ('s' flag, multiline capture):", matchDotAll[1].trim()); // Output: After ('s' flag, multiline capture): This is some text.

// الحل الجديد: استخدام 'd' flag (hasIndices)
const textWithGroups = "Hello, world!";
const regexD = /(Hello), (world!)/d;
const matchD = regexD.exec(textWithGroups);
if (matchD) {
  console.log("After ('d' flag): Full match indices:", matchD.indices[0]); // Output: Full match indices: [0, 13]
  console.log("After ('d' flag): Group 1 indices (Hello):", matchD.indices[1]); // Output: Group 1 indices (Hello): [0, 5]
  console.log("After ('d' flag): Group 2 indices (world!):", matchD.indices[2]); // Output: Group 2 indices (world!): [7, 13]
}

// الحل الجديد: استخدام 'v' flag (unicodeSets)
// const emojiRegex = /\p{Emoji_Presentation}/v; // Example: match any emoji
// console.log("After ('v' flag):", emojiRegex.test("👋"));
// (Note: 'v' flag examples often require specific unicode characters that might not render correctly in all console environments)
